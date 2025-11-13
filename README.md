# PAT-Documentation

This documentation defines the annual data update process for the PAT (Procurement Analysis Tool) Master DataBook. It contains guidance on data collection, cleaning, integration, tab-specific updates, and maintenance procedures.

## Quick Start

### Prerequisites

- **Python 3.7+**
- **pip** (Python package manager)

### Setup (Local Development)

1. Clone or navigate to the repository:
   ```bash
   cd /Users/pbotin/Documents/PAT/PAT-Documentation
   ```

2. Create a Python virtual environment (recommended):
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install MkDocs and Material theme:
   ```bash
   pip install mkdocs mkdocs-material
   ```

4. Verify installation:
   ```bash
   mkdocs --version
   ```

## Usage

### Serve Documentation Locally

To preview the documentation while editing:

```bash
mkdocs serve
```

This will start a local web server at `http://localhost:8000`. The site will auto-reload when you make changes to Markdown files.

### Build Static Site

To generate the static HTML site (output goes to `site/` directory):

```bash
mkdocs build
```

To build with strict mode (catches missing links/anchors):

```bash
mkdocs build --strict
```

## Repository Structure

```
PAT-Documentation/
├── mkdocs.yml           # MkDocs configuration (site name, theme, nav, plugins)
├── README.md            # This file
├── docs/                # Source Markdown files (canonical documentation)
│   ├── index.md         # Home page
│   ├── introduction.md  # PAT and Master DataBook overview
│   ├── data_architecture.md  # Folder structure and data organization
│   ├── update_process.md     # Overview and high-level update workflow
│   ├── utilities_update.md   # Utilities tab updates, Competitive Suppliers, CCA, PPA notes
│   ├── competitive_suppliers.md  # Competitive Suppliers tab guidance (deprecated: now in utilities_update.md)
│   ├── other_updates.md      # Other tabs: Utilities, States, Information, Update Tracker, Documentation
│   ├── source_list.md        # Recurring and random sources to monitor
│   ├── javascripts/          # Custom JS (if any)
│   └── stylesheets/          # Custom CSS (if any)
└── site/                # Generated static HTML (created by `mkdocs build`)
    ├── index.html
    ├── introduction/
    ├── ...
    └── search/
```

## Documentation Structure

The docs are organized as follows:

- **Home (index.md)**: Overview and links to main sections.
- **Introduction**: Background on PAT and the Master DataBook.
- **Data Architecture**: Folder organization, Master DataBook structure, and key principles.
- **Update Process**: High-level overview with sections on Data Collection, Data Cleaning, Data Integration, and Tab-Specific Updates.
  - **Utilities Update (utilities_update.md)**: Workflow for the Options with Utilities tab, Competitive Suppliers tab, Community Choice Aggregation, and PPA price mappings.
  - **Other Updates (other_updates.md)**: Guidance for Utilities, States, Information, Update Tracker, and Documentation tabs.
  - **Source List**: Recurring and random data sources to check for updates.

## Configuration

The `mkdocs.yml` file controls the site configuration:

- **site_name**: "PAT Documentation"
- **theme**: Material theme with navigation tabs and search highlighting
- **nav**: Navigation structure (Home, Introduction, Data Architecture, Update Process with dropdowns, Source List)
- **plugins**: Search plugin enabled
- **markdown_extensions**: Admonition, attribute lists, TOC with permalinks, code highlighting

### Customizing Navigation

Edit `mkdocs.yml` to add/remove pages or adjust the nav hierarchy:

```yaml
nav:
  - Home: index.md
  - Introduction: introduction.md
  - Update Process:
    - Overview: update_process.md
    - Utilities Update: utilities_update.md
    - Other: other_updates.md
  - Source List: source_list.md
```

## Writing and Editing

- **Markdown format**: All docs use standard Markdown. See [Markdown Guide](https://www.markdownguide.org/).
- **File naming**: Use lowercase with underscores (e.g., `data_architecture.md`).
- **Internal links**: Reference files using relative paths (e.g., `[Link](source_list.md)`) or anchor links (e.g., `[Link](#section-heading)`).
- **Code blocks**: Use triple backticks with language tags for syntax highlighting.

### Example Markdown Snippet

```markdown
## Section Heading

Paragraph text here.

- Bullet point
- Another bullet

> **Tip:** Use blockquotes for tips and notes.

### Subsection

[Link to another page](utilities_update.md)
[Link to section](#data-collection)

\`\`\`bash
# Code example
mkdocs serve
\`\`\`
```

## Building and Deployment

### Local Build

```bash
mkdocs build
```

This creates the `site/` directory with all generated HTML, CSS, and JS files.

### Serve on Local Network

To make the site accessible from other machines:

```bash
mkdocs serve -a 0.0.0.0:8000
```

Then access it at `http://<your-machine-ip>:8000`.

### Deploy to GitHub Pages (If Hosting)

If the repository is on GitHub, you can deploy the site automatically:

1. Ensure the repository has GitHub Pages enabled (Settings > Pages).
2. Use GitHub Actions or manually push the `site/` directory to a `gh-pages` branch.

Example GitHub Actions workflow (`.github/workflows/deploy.yml`):

```yaml
name: Deploy Docs

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-python@v2
        with:
          python-version: '3.9'
      - run: pip install mkdocs mkdocs-material
      - run: mkdocs build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./site
```

### Manual Deployment

To deploy to a web server:

1. Run `mkdocs build` to generate the `site/` directory.
2. Copy the contents of `site/` to your web server's document root.
3. Ensure the web server is configured to serve `site/index.html` as the default page.

## Updating Documentation

When updating content:

1. Edit the relevant `.md` file in the `docs/` folder.
2. Run `mkdocs serve` to preview changes locally.
3. Verify links and formatting are correct.
4. Commit changes to the repository:
   ```bash
   git add .
   git commit -m "Update documentation: [brief description]"
   git push
   ```

## Troubleshooting

### Port 8000 Already in Use

If port 8000 is already in use, specify a different port:

```bash
mkdocs serve -a localhost:8001
```

### Missing Links or Anchors

Build with strict mode to catch issues:

```bash
mkdocs build --strict
```

This will report any broken links or missing anchor references.

### Theme Issues

Ensure the Material theme is installed:

```bash
pip install --upgrade mkdocs-material
```

### Cache Issues

Clear the build cache:

```bash
rm -rf site/
mkdocs build
```

## Resources

- [MkDocs Official Documentation](https://www.mkdocs.org/)
- [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)
- [Markdown Guide](https://www.markdownguide.org/)
- [YAML Guide (for mkdocs.yml)](https://yaml.org/start.html)

## Contributing

To add or update documentation:

1. Follow the Markdown conventions outlined above.
2. Test your changes locally with `mkdocs serve`.
3. Use descriptive commit messages.
4. Ensure all links are valid and internal references use relative paths.

## License

This documentation is part of the PAT (Procurement Analysis Tool) project. Please refer to the project's LICENSE file for details.

## Contact & Support

For questions about the documentation or the PAT project, contact the project maintainers or refer to the project's main repository.
