# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a personal website for adrianmoses.com built with [Zola](https://www.getzola.org), a static site generator written in Rust. The site uses the [anemone theme](https://github.com/Speyll/anemone), a minimalist theme that prioritizes clean CSS and avoids heavy JavaScript.

## Development Commands

### Build and Serve
```bash
# Serve locally with live reload (default: http://127.0.0.1:1111)
zola serve

# Build the site for production
zola build

# Check all internal and external links
zola check
```

### Content Management
```bash
# Create new content (Note: Zola doesn't have a built-in command for this)
# Manually create .md files in content/ directory following existing patterns
```

## Architecture

### Project Structure

- **config.toml**: Root configuration file
  - Base URL: https://adrianmoses.com
  - Default language: Spanish (es)
  - Theme: anemone (located in themes/anemone/)
  - Taxonomies: Tags (with feeds, paginated by 10)
  - Search index enabled

- **content/**: Site content in Markdown format
  - `_index.md`: Homepage content
  - `blog/`: Blog posts with frontmatter
  - `sobre.md`: About page
  - `cuaderno.md`: Notebook/journal page
  - Each content file has TOML frontmatter delimited by `+++`

- **themes/anemone/**: Theme files (git submodule)
  - `templates/`: Tera template files
    - `base.html`: Base template with navigation and theme toggle
    - `blog/`: Blog-specific templates (page.html, section.html)
    - `partials/`: Reusable template components
    - `shortcodes/`: Custom shortcodes (img, mark, webring, youtube)
  - `static/`: Static assets
    - `css/style.css`: Main theme styles
    - `js/script.js`: Theme toggle and interactions
    - `icons.svg`: SVG icon sprites
    - `click.ogg`: Theme toggle sound effect (1kb)
  - Uses suCSS framework for CSS

### Template System

Zola uses the Tera templating engine. The template hierarchy:
- `base.html`: Defines site structure with blocks for content
- Specific templates extend base (blog/page.html, section.html, etc.)
- Templates access page metadata via frontmatter variables
- Current language determined from page/section context for multilingual support

### Navigation Configuration

Navigation is configured in config.toml under `[extra]`:
```toml
header_nav = [
  { url = "/", name_es = "/casa/"},
  { url = "/sobre", name_es = "/sobre/"},
  { url = "/cuaderno", name_es = "/cuaderno/"}
]
```

Language-specific navigation labels use the pattern `name_{lang_code}`.

### Content Frontmatter

Blog posts and pages use TOML frontmatter:
```toml
+++
title = "Post Title"
date = 2020-07-07
[taxonomies]
tags = ["tag1", "tag2"]
[extra]
toc = true  # Enable table of contents
+++
```

### Multilingual Support

The site is configured for Spanish as default language. The anemone theme supports multilingual navigation and content through:
- `config.toml` language sections ([languages.es])
- Language-specific navigation labels (name_es, name_fr, etc.)
- Per-page language detection from frontmatter

### Theme Features

The anemone theme includes:
- Light/dark theme toggle with system preference detection
- Minimal JavaScript for theme switching
- Responsive design
- Search functionality (when build_search_index = true)
- RSS/Atom feed generation
- Syntax highlighting (gruvbox-dark theme)
- Custom shortcodes for enhanced content

## Important Notes

- The theme is a git submodule - avoid modifying theme files directly
- Content overrides theme content (root content/ takes precedence)
- Markdown uses smart punctuation and emoji rendering
- External links open in new tabs (external_links_target_blank = true)
- Site minifies HTML in production builds
