# Beyond Bedrock - Minecraft Content Platform

A Docusaurus-powered platform for sharing and discovering Minecraft Bedrock Edition content including addons, maps, resource packs, and guides.

## 📝 Content Submission Guide

### 🆕 Submitting New Content

#### 1. File Structure
Create your content in the appropriate section:
```
src/pages/
├── addons/           # Add-ons and mods
├── maps/             # Custom maps
├── resource-packs/   # Texture and resource packs
└── guides/           # Tutorials and guides
```

#### 2. Required Frontmatter
Every markdown file must include this frontmatter:

```yaml
---
id: your-content-id
title: "Your Content Title"
description: "Brief description of your content"
image: img/addons/your-content-id/thumbnail.webp
author:
  name: "Your Name"
  avatar: img/authors/your-avatar.webp
tags:
  - utility
  - example
contributors:
  - your-username
---
```

**Required Fields:**
- `id` - Must be unique across ALL sections and match your filename
- `title` - Content title
- `description` - Brief description
- `author.name` - Author name
- `author.avatar` - Author avatar image path (local file in `static/img/authors/`)
- `contributors` - Array of contributor usernames

#### 3. File Naming
- Filename must match the `id` field: `your-content-id.md`
- Example: `src/pages/addons/epic-addon.md` with `id: epic-addon`

#### 4. Image Requirements
- **Format**: WebP preferred, PNG/JPG accepted
- **Size**: Under 3MB per image
- **Location**: 
  - Content images: `static/img/[section]/[slug]/filename.webp`
  - Author avatars: `static/img/authors/filename.webp`
- **Paths**: Reference without `static/` prefix in frontmatter

#### 5. Validation Rules
- All referenced images must exist
- IDs must be unique across all sections
- Numeric fields (`downloads`, `rating`) must be numbers
- `lastUpdated` must be valid ISO 8601 date
- Arrays (`tags`, `images`) must be valid arrays

### ✏️ Editing Existing Content

#### 1. Authorization
- Only the **content owner** or listed **editors** can modify posts
- Ownership is tracked in `contributors.json`
- New contributors are automatically added when content is created

#### 2. Edit Restrictions
- **ID cannot be changed** after creation
- **Author name cannot be modified** after creation
- **New images must follow** path conventions
- **Deleted images** must be removed from references

#### 3. Contributor Management
The `contributors.json` structure:
```json
{
  "content-slug": {
    "owner": "github-username",
    "editors": ["collaborator1", "collaborator2"]
  }
}
```

## 🚀 Development Setup

### Prerequisites
- Node.js 20+
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/your-username/beyond-bedrock.git
cd beyond-bedrock

# Install dependencies
npm install

# Start development server
npm start
```

### Available Scripts
```bash
npm start          # Start development server
npm run build       # Build for production
npm run serve       # Serve built site locally
npm run generate-catalog  # Generate content catalog files
npm run clear-all   # Clear all generated content
```

## 📁 Project Structure

```
├── src/
│   ├── pages/           # Content markdown files
│   ├── components/      # React components
│   └── plugins/         # Custom Docusaurus plugins
├── static/              # Static assets and generated catalogs
├── scripts/             # Build and validation scripts
├── .github/workflows/   # CI/CD workflows
└── contributors.json    # Content ownership tracking
```

## 🔧 Content Validation

The platform includes automated validation that runs on every PR:

### New Content Checks
- ✅ Required frontmatter fields present
- ✅ ID matches filename
- ✅ Valid field types and formats
- ✅ Image existence and size limits
- ✅ Proper file locations

### Edit Content Checks
- ✅ User authorization (owner/editors only)
- ✅ No ID or author changes
- ✅ Image path conventions
- ✅ No deleted image references

### Build Process
1. **Content parsing** - Extract frontmatter and validate
2. **Image validation** - Check all referenced images exist
3. **Uniqueness check** - Ensure no duplicate IDs
4. **Catalog generation** - Create paginated JSON files
5. **Route creation** - Generate detail pages for each item

## 🎯 Content Types

### Add-ons (`addons/`)
Minecraft behavior and resource pack modifications

### Maps (`maps/`)
Custom world files and adventure maps

### Resource Packs (`resource-packs/`)
Texture and sound modification packs

### Guides (`guides/`)
Tutorials, documentation, and help content

## 📊 Content Metadata

### Optional Fields
- `datePublished` - Publication date for SEO
- `dateModified` - Last modification date
- `longDescription` - HTML content for detail pages
- `screenshots` - Additional screenshot array
- `thumbnail` - Custom thumbnail (defaults to `image`)
- `reviewCount` - Number of reviews for structured data
- `downloads` - Download count (number)
- `rating` - Rating value (number, 0-5)
- `category` - Content category for filtering
- `downloadUrl` - Direct download link

### SEO Features
- Automatic structured data generation
- Open Graph and Twitter Card meta tags
- Breadcrumb navigation
- Search-friendly URLs

## 🎨 Content Best Practices

### Writing Guidelines
- Use clear, descriptive titles
- Write concise descriptions (under 200 characters for optimal display)
- Include relevant tags for better discoverability
- Use high-quality images that showcase your content effectively

### Image Optimization
- Use WebP format for better compression
- Optimize images for web (keep file sizes reasonable)
- Use descriptive filenames (e.g., `screenshot-1.webp` instead of `img_001.webp`)
- Include multiple screenshots to show different features

### Content Organization
- Group related content in appropriate sections
- Use consistent naming conventions
- Update `lastUpdated` when making significant changes
- Remove outdated or broken content promptly

## 🔍 Content Discovery

### How Content Gets Featured
- Content is sorted by `lastUpdated` (newest first)
- Higher-rated content appears more prominently
- Proper tagging improves searchability
- Quality images increase click-through rates

### Tagging Strategy
- Use specific, relevant tags
- Include both broad and specific tags
- Follow consistent tag formatting (lowercase, hyphen-separated)
- Limit to 5-7 most relevant tags per item

## 🛠️ Troubleshooting

### Common Issues
- **Missing images**: Ensure all referenced images exist in `static/`
- **Duplicate IDs**: Check all sections for unique IDs
- **Validation failures**: Review GitHub Actions error messages
- **Build errors**: Run `npm run generate-catalog` locally

### Getting Help
- Check the [GitHub Issues](https://github.com/your-username/beyond-bedrock/issues)
- Review the validation error messages in PR comments
- Ensure all requirements in this guide are met

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Add your content following the guidelines above
4. Submit a pull request
5. Address any validation feedback

---

**Note**: All content is subject to automated validation. Ensure your submission follows all guidelines to avoid PR rejections.