# Project Context: Marble Brew Shopify Theme

## Overview

- **Project Name**: themarble-theme
- **Theme Name**: Marble Brew (previously Bans OS 2.0)
- **Development Team**: Studio Kaffein (previously Team90Degree)
- **Platform**: Shopify e-commerce

## Project Structure

The theme follows standard Shopify theme structure:

- `assets/`: Theme assets (CSS, JavaScript, images)
- `config/`: Theme configuration files
- `layout/`: Layout templates
- `locales/`: Translation files
- `sections/`: Modular sections used throughout the theme
- `snippets/`: Reusable code snippets
- `templates/`: Page templates

## Design Decisions

- Primary brand color: Goldenrod (#DAA520) used for navigation highlights
- Navigation:
  - Active page highlighted with a goldenrod bottom border
  - Active menu items have blue text (#003459) and bold font weight
  - Aria-current attribute for accessibility
- Theme styling follows typical e-commerce patterns with clean, responsive design
- **Note**: We've kept original CSS classes with "bans-" prefix for compatibility, but changed all visible branding to "Marble Brew"

## Naming Conventions

- BEM-style CSS naming in many components
- Shopify standard liquid template patterns
- Component-based structure for reusability

## Important Components

- Navigation menus include desktop and mobile versions
- Multiple header options/styles available in theme settings
- Footer has multiple style options

This document will be updated as project evolves.
