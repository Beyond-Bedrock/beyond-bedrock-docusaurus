const path = require('path');
const fs = require('fs/promises');

module.exports = function catalogPagesPlugin(context, options) {
  const {
    id = 'default',
    routeBasePath = '/catalog',
    dataDir = 'static/catalog',
    component = '@site/src/components/AddonsPage.jsx',
  } = options ?? {};

  return {

    name: `catalog-pages-${id}`,

    async loadContent() {
      const absDir = path.join(context.siteDir, dataDir);
      const index = JSON.parse(await fs.readFile(path.join(absDir, 'index.json'), 'utf8'));
      const totalPages = index.totalPages ?? 1;

      const pages = [];
      for (let page = 1; page <= totalPages; page++) {
        const raw = await fs.readFile(path.join(absDir, `page-${page}.json`), 'utf8');
        const items = JSON.parse(raw);
        pages.push({ page, items: Array.isArray(items) ? items : [] });
      }

      return { totalPages, pages };
    },

    async contentLoaded({ content, actions }) {
      const { createData, addRoute } = actions;

      for (const { page, items } of content.pages) {
        const propsPath = await createData(
          `${id}-page-${page}.json`,
          JSON.stringify({ page, totalPages: content.totalPages, addons: items })
        );

        addRoute({
          path: page === 1 ? routeBasePath : `${routeBasePath}/page/${page}`,
          component,
          modules: { props: propsPath },
          exact: true,
          data: propsPath,
        });
      }
    },
  };
};
