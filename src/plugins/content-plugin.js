import path from 'path';
import fs from 'fs';
import { createData } from '@docusaurus/utils';

export default function contentPlugin(context, options) {
  return {
    name: 'content-plugin',
    
    async loadContent() {
      const { siteDir } = context;
      const staticDir = path.join(siteDir, 'static');
      const contentTypes = ['addons', 'guides', 'maps', 'resource-packs', 'Guides'];
      const allContent = {};

      for (const contentType of contentTypes) {
        const contentDir = path.join(staticDir, contentType);
        
        if (!fs.existsSync(contentDir)) {
          console.warn(`Content directory not found: ${contentDir}`);
          allContent[contentType] = { items: [], totalPages: 0, totalItems: 0 };
          continue;
        }

        const indexPath = path.join(contentDir, 'index.json');
        
        if (!fs.existsSync(indexPath)) {
          console.warn(`Index file not found: ${indexPath}`);
          allContent[contentType] = { items: [], totalPages: 0, totalItems: 0 };
          continue;
        }

        try {
          const indexData = JSON.parse(fs.readFileSync(indexPath, 'utf8'));
          const totalPages = indexData.totalPages || 0;
          const totalItems = indexData.totalItems || 0;
          const allItems = [];
          
          // Only fetch pages if totalPages > 0
          if (totalPages > 0) {
            // Fetch all pages
            for (let page = 1; page <= totalPages; page++) {
              const pagePath = path.join(contentDir, `page-${page}.json`);
              
              if (fs.existsSync(pagePath)) {
                const pageData = JSON.parse(fs.readFileSync(pagePath, 'utf8'));
                allItems.push(...(Array.isArray(pageData) ? pageData : []));
              }
            }
          }

          allContent[contentType] = {
            items: allItems,
            totalPages,
            totalItems,
          };
        } catch (error) {
          console.error(`Error loading content for ${contentType}:`, error);
          allContent[contentType] = { items: [], totalPages: 0, totalItems: 0 };
        }
      }

      return allContent;
    },

    async contentLoaded({ content, actions }) {
      const { createData, addRoute, setGlobalData } = actions;
      const { siteDir } = context;
      const contentTypes = ['addons', 'guides', 'maps', 'resource-packs'];

      // Set global data for all content
      await setGlobalData(content);

      // Track existing routes to avoid duplicates
      const existingRoutes = new Set();

      // Check for existing page files
      for (const contentType of contentTypes) {
        const pagesDir = path.join(siteDir, 'src', 'pages', contentType);
        
        if (fs.existsSync(pagesDir)) {
          const pageFiles = fs.readdirSync(pagesDir, { withFileTypes: true })
            .filter(dirent => dirent.isFile())
            .map(dirent => dirent.name);
          
          for (const pageFile of pageFiles) {
            const baseName = path.parse(pageFile).name;
            existingRoutes.add(`${contentType}/${baseName}`);
          }
        }
      }

      // Create routes for each content type
      for (const contentType of contentTypes) {
        const contentTypeData = content[contentType] || { items: [], totalPages: 0, totalItems: 0 };

        // Create list page data
        const listDataPath = await createData(
          `${contentType}-list.json`,
          JSON.stringify({
            ...contentTypeData,
            contentType,
          })
        );

        // Add list route
        addRoute({
          path: `${context.baseUrl}${contentType}`,
          component: path.resolve(__dirname, '../components/ContentList.js'),
          modules: {
            content: listDataPath,
          },
          exact: true,
        });

        // Create individual item routes
        if (contentTypeData.items && contentTypeData.items.length > 0) {
          for (const item of contentTypeData.items) {
            if (item.path && item.id) {
              // Remove leading slash from path for route creation
              const routePath = item.path.startsWith('/') ? item.path.slice(1) : item.path;
              
              // Skip if route already exists (either from pages directory or already created)
              if (existingRoutes.has(routePath)) {
                console.log(`Skipping duplicate route: ${routePath}`);
                continue;
              }

              const itemDataPath = await createData(
                `${contentType}-${item.id}.json`,
                JSON.stringify(item)
              );
              
              addRoute({
                path: `${context.baseUrl}${routePath}`,
                component: path.resolve(__dirname, '../components/ContentDetail.js'),
                modules: {
                  item: itemDataPath,
                  contentType: await createData(
                    `${contentType}-type.json`,
                    JSON.stringify(contentType)
                  ),
                },
                exact: true,
              });

              existingRoutes.add(routePath);
            }
          }
        }
      }
    },
  };
}
