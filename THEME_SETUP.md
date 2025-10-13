# PAT Documentation Theme Setup

This documentation site has been configured to match the NREL/PAT branding and visual identity.

## What's Included

### 🎨 Visual Branding
- **NREL Color Scheme**: Blue (#0079c2), Green (#00a651), and supporting colors
- **Professional Typography**: Roboto font family for clean, modern look
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **PAT-Themed Elements**: Custom styling for energy/sustainability content

### 🧭 Navigation Structure
- Organized navigation matching your documentation workflow
- Tab-based navigation for major sections
- Search functionality with highlighting
- Table of contents for easy page navigation

### 📱 Features
- Light/dark mode toggle
- Social links to NREL and PAT websites
- Custom admonitions for energy and data topics
- Code syntax highlighting
- Responsive tables and content

## To Complete the Setup

### 1. Install Required Dependencies
```bash
pip install mkdocs-material
pip install mkdocs-minify-plugin
```

### 2. Add NREL/PAT Logos
- Place NREL logo as `docs/assets/nrel-logo.png` (recommended: 200x60px)
- Place favicon as `docs/assets/favicon.ico`
- You can download these from the official NREL website

### 3. Update Repository Information
Edit `mkdocs.yml` and update:
- `repo_url`: Your actual repository URL
- `site_url`: Your documentation site URL
- Social links in the `extra` section

### 4. Run the Documentation
```bash
# Serve locally for development
mkdocs serve

# Build for production
mkdocs build
```

### 5. Deploy Options
- **GitHub Pages**: Use `mkdocs gh-deploy`
- **NREL Infrastructure**: Follow internal deployment guidelines
- **Custom Server**: Use the built files in `site/` directory

## Customization Options

### Colors
Edit `docs/stylesheets/extra.css` to modify the color scheme. Current NREL brand colors are defined in CSS variables.

### Navigation
Update the `nav` section in `mkdocs.yml` to add/remove/reorganize pages.

### Content Types
Use these custom admonitions in your markdown:
```markdown
!!! energy "Energy Insight"
    Information related to energy procurement and sustainability

!!! data "Data Note"
    Information about data sources, processing, or quality
```

## Need Help?
- [MkDocs Material Documentation](https://squidfunk.github.io/mkdocs-material/)
- [NREL Brand Guidelines](https://www.nrel.gov/communications/brand-guidelines.html)
- [PAT Tool Website](https://pat.nrel.gov/)