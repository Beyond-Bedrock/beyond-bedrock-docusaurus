const fs = require('fs');
const path = require('path');

const STATIC_DIR = path.join(__dirname, '../static');
const PAGES_DIR = path.join(__dirname, '../src/pages');

console.log('🧹 Clearing all generated content...\n');

// Function to safely delete a directory
function deleteDirectory(dirPath) {
  if (fs.existsSync(dirPath)) {
    fs.rmSync(dirPath, { recursive: true, force: true });
    console.log(`✅ Deleted directory: ${dirPath}`);
  } else {
    console.log(`⚠️  Directory not found: ${dirPath}`);
  }
}

// Function to safely delete a file
function deleteFile(filePath) {
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log(`✅ Deleted file: ${filePath}`);
  } else {
    console.log(`⚠️  File not found: ${filePath}`);
  }
}

// 1. Delete all JSON files in static directory
console.log('📁 Deleting JSON files from static directory...');
if (fs.existsSync(STATIC_DIR)) {
  const staticItems = fs.readdirSync(STATIC_DIR);
  staticItems.forEach(item => {
    const itemPath = path.join(STATIC_DIR, item);
    const stat = fs.statSync(itemPath);
    
    if (stat.isDirectory()) {
      // Delete all JSON files in subdirectories
      const subItems = fs.readdirSync(itemPath);
      subItems.forEach(subItem => {
        if (subItem.endsWith('.json')) {
          deleteFile(path.join(itemPath, subItem));
        }
      });
    } else if (item.endsWith('.json')) {
      // Delete JSON files in root static directory
      deleteFile(itemPath);
    }
  });
}

// 2. Reset all index.json files to default state
console.log('\n📄 Resetting index.json files to default state...');
if (fs.existsSync(STATIC_DIR)) {
  const staticItems = fs.readdirSync(STATIC_DIR);
  staticItems.forEach(item => {
    const itemPath = path.join(STATIC_DIR, item);
    const stat = fs.statSync(itemPath);
    
    if (stat.isDirectory()) {
      const indexPath = path.join(itemPath, 'index.json');
      const defaultIndex = {
        pageSize: 20,
        totalItems: 0,
        totalPages: 0
      };
      
      fs.writeFileSync(indexPath, JSON.stringify(defaultIndex, null, 2));
      console.log(`✅ Reset: ${indexPath}`);
    }
  });
}

// 3. Delete all markdown files in src/pages (posts)
console.log('\n📝 Deleting all markdown posts...');
if (fs.existsSync(PAGES_DIR)) {
  const sections = fs.readdirSync(PAGES_DIR);
  sections.forEach(section => {
    const sectionPath = path.join(PAGES_DIR, section);
    const stat = fs.statSync(sectionPath);
    
    if (stat.isDirectory()) {
      const files = fs.readdirSync(sectionPath);
      files.forEach(file => {
        if (file.endsWith('.md')) {
          deleteFile(path.join(sectionPath, file));
        }
      });
    }
  });
}

// 4. Delete images from authors and addons directories
console.log('\n🖼️  Deleting images from authors and addons directories...');
const imgDir = path.join(STATIC_DIR, 'img');

// Delete all images from authors directory
const authorsDir = path.join(imgDir, 'authors');
if (fs.existsSync(authorsDir)) {
  const authorFiles = fs.readdirSync(authorsDir);
  authorFiles.forEach(file => {
    const filePath = path.join(authorsDir, file);
    if (fs.statSync(filePath).isFile()) {
      deleteFile(filePath);
    }
  });
}

// Delete all folders from addons directory
const addonsDir = path.join(imgDir, 'addons');
if (fs.existsSync(addonsDir)) {
  const addonFolders = fs.readdirSync(addonsDir);
  addonFolders.forEach(folder => {
    const folderPath = path.join(addonsDir, folder);
    if (fs.statSync(folderPath).isDirectory()) {
      deleteDirectory(folderPath);
    }
  });
}

// 5. Delete Docusaurus build cache
console.log('\n🏗️  Deleting Docusaurus build cache...');
const buildDir = path.join(__dirname, '../build');
const cacheDir = path.join(__dirname, '../.docusaurus');
deleteDirectory(buildDir);
deleteDirectory(cacheDir);

console.log('\n🎉 Clear all operation completed!');
console.log('📊 Summary:');
console.log('   - All JSON files deleted');
console.log('   - All index.json files reset to defaults');
console.log('   - All markdown posts deleted');
console.log('   - All images from authors directory deleted');
console.log('   - All folders from addons directory deleted');
console.log('   - Docusaurus cache cleared');
console.log('\n💡 Run "npm run generate-catalog" to create fresh catalog files');
console.log('💡 Run "npm run serve" to start development server');
