const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const CONTENT_DIR = path.join(__dirname, '../src/pages');
const STATIC_DIR = path.join(__dirname, '../static');
const PAGE_SIZE = 20;

function extractSectionFromPath(filePath) {
  const parts = filePath.split(path.sep);
  const pagesIndex = parts.indexOf('pages');
  if (pagesIndex !== -1 && pagesIndex + 1 < parts.length) {
    return parts[pagesIndex + 1];
  }
  return null;
}

function validateImage(imagePath, section, slug) {
  if (!imagePath) return null;
  
  // Convert absolute paths to relative static paths
  let staticPath = imagePath;
  if (imagePath.startsWith('/')) {
    staticPath = imagePath.slice(1); // Remove leading slash
  }
  
  const fullPath = path.join(__dirname, '..', 'static', staticPath);
  
  if (!fs.existsSync(fullPath)) {
    const errorMsg = `❌ Image not found: ${imagePath} (referenced in ${section}/${slug})`;
    console.error(errorMsg);
    
    // Output GitHub Actions error annotation if running in CI
    if (process.env.GITHUB_ACTIONS) {
      console.error(`::error file=src/pages/${section}/${slug}.md,title=Missing Image::Image not found: ${imagePath}. Please add the image file or remove the reference.`);
    }
    
    process.exitCode = 1; // Set exit code to fail the build
    return null;
  }
  
  return imagePath;
}

function generateCatalogForSection(section) {
  const sectionDir = path.join(CONTENT_DIR, section);
  if (!fs.existsSync(sectionDir)) {
    console.log(`Section directory not found: ${sectionDir}`);
    return;
  }

  const staticSectionDir = path.join(STATIC_DIR, section);
  if (!fs.existsSync(staticSectionDir)) {
    fs.mkdirSync(staticSectionDir, { recursive: true });
  }

  // Read all markdown files in the section
  const files = fs.readdirSync(sectionDir)
    .filter(file => file.endsWith('.md'))
    .map(file => path.join(sectionDir, file))
    .filter(file => fs.statSync(file).isFile());

  // Parse and sort items
  const items = files.map(filePath => {
    const content = fs.readFileSync(filePath, 'utf8');
    const { data, content: body } = matter(content);
    const slug = path.basename(filePath, '.md');
    
    // Validate main image
    const validImage = validateImage(data.image, section, slug);
    
    // Validate images array
    const validImages = (data.images || [])
      .map(img => validateImage(img, section, slug))
      .filter(img => img !== null);
    
    // Validate author avatar if present
    let validAuthor = data.author || { name: 'Unknown', url: '' };
    if (validAuthor.avatar) {
      const validatedAvatar = validateImage(validAuthor.avatar, section, slug);
      if (validatedAvatar) {
        validAuthor.avatar = validatedAvatar;
      } else {
        // Remove invalid avatar
        const { avatar, ...authorWithoutAvatar } = validAuthor;
        validAuthor = authorWithoutAvatar;
      }
    }
    
    return {
      id: data.id || slug,
      slug,
      title: data.title || slug,
      description: data.description || '',
      author: validAuthor,
      images: validImages,
      tags: data.tags || [],
      category: data.category || '',
      downloads: data.downloads || 0,
      rating: data.rating || 0,
      lastUpdated: data.lastUpdated || new Date().toISOString(),
      content: body.slice(0, 200) + '...', // First 200 chars as preview
      ...(validImage && { image: validImage }) // Only include image if valid
    };
  }).sort((a, b) => {
    const dateA = new Date(a.lastUpdated || 0);
    const dateB = new Date(b.lastUpdated || 0);
    return dateB.getTime() - dateA.getTime(); // Newest first (descending)
  });

  // Generate pagination
  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / PAGE_SIZE);

  // Write index.json
  const indexData = {
    pageSize: PAGE_SIZE,
    totalItems,
    totalPages
  };
  fs.writeFileSync(
    path.join(staticSectionDir, 'index.json'),
    JSON.stringify(indexData, null, 2)
  );

  // Write page files
  for (let page = 1; page <= totalPages; page++) {
    const startIndex = (page - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    const pageItems = items.slice(startIndex, endIndex);
    
    fs.writeFileSync(
      path.join(staticSectionDir, `page-${page}.json`),
      JSON.stringify(pageItems, null, 2)
    );
  }

  console.log(`Generated catalog for ${section}: ${totalItems} items, ${totalPages} pages`);
}

// Get all sections from src/pages
const sections = fs.existsSync(CONTENT_DIR) 
  ? fs.readdirSync(CONTENT_DIR)
      .filter(item => {
        const itemPath = path.join(CONTENT_DIR, item);
        return fs.statSync(itemPath).isDirectory();
      })
  : [];

console.log('Found sections:', sections);

// Check for duplicate IDs across all sections
const allIds = new Map();
const duplicateIds = new Set();

for (const section of sections) {
  const sectionDir = path.join(CONTENT_DIR, section);
  if (!fs.existsSync(sectionDir)) continue;
  
  const files = fs.readdirSync(sectionDir)
    .filter(file => file.endsWith('.md'))
    .map(file => path.join(sectionDir, file))
    .filter(file => fs.statSync(file).isFile());

  for (const filePath of files) {
    const content = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(content);
    const id = data.id;
    
    if (id) {
      if (allIds.has(id)) {
        duplicateIds.add(id);
        console.error(`❌ Duplicate ID found: ${id} in ${allIds.get(id)} and ${filePath}`);
        if (process.env.GITHUB_ACTIONS) {
          console.error(`::error file=${filePath},title=Duplicate ID::ID '${id}' is already used in ${allIds.get(id)}. IDs must be unique across all content.`);
        }
        process.exitCode = 1;
      } else {
        allIds.set(id, filePath);
      }
    }
  }
}

// Generate catalog for each section
sections.forEach(generateCatalogForSection);

// Also generate main index.json that lists all sections
const mainIndex = {
  sections: sections.map(section => ({
    name: section,
    itemCount: fs.existsSync(path.join(STATIC_DIR, section, 'index.json'))
      ? JSON.parse(fs.readFileSync(path.join(STATIC_DIR, section, 'index.json'), 'utf8')).totalItems
      : 0
  }))
};

fs.writeFileSync(
  path.join(STATIC_DIR, 'index.json'),
  JSON.stringify(mainIndex, null, 2)
);

console.log('Catalog generation complete!');

// Exit with error code if any validation failed
if (process.exitCode === 1) {
  console.error('\n❌ Validation failed. Please fix the following issues:');
  console.error('- Missing images: Add the missing image files or remove the references');
  console.error('- Duplicate IDs: Ensure all content IDs are unique across sections');
  console.error('Check the error messages above for specific details.');
  process.exit(1);
}
