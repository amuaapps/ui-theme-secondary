# @amuaapps/ui-theme-secondary

Secondary UI theme for Amua Apps - Marketing-style design tokens with bigger typography, stronger depth, and more expressive motion.

## Overview

This package provides a **scoped-only** theme variant (`.theme-secondary`) with design tokens optimized for marketing pages, landing pages, and promotional content. It features:

- **Bigger typography** - Larger base sizes and headings for impact
- **Airier controls** - More generous spacing and padding
- **Rounder corners** - Increased border radius (0.875rem vs 0.5rem)
- **Stronger depth** - Enhanced shadow system for more visual hierarchy
- **More expressive motion** - Slightly longer, bouncier animations

**Important:** This theme does NOT define `:root` tokens. It only provides `.theme-secondary` scoped tokens. For base/default tokens, use `@amuaapps/ui-theme-core`.

## Installation

```bash
npm install @amuaapps/ui-theme-secondary
```

## Usage

### Import the theme CSS

```typescript
import '@amuaapps/ui-theme-secondary/styles';
```

Or import the CSS file directly:

```typescript
import '@amuaapps/ui-theme-secondary/theme.css';
```

### Apply the theme

Add the `.theme-secondary` class to any container where you want the secondary theme applied:

```html
<div class="theme-secondary">
  <!-- All children inherit secondary theme tokens -->
  <h1>Marketing Headline</h1>
  <button>Call to Action</button>
</div>
```

## Token Differences from Core

| Token Category | Core Value | Secondary Value | Notes |
|---------------|------------|-----------------|-------|
| `--radius` | 0.5rem | 0.875rem | Rounder corners |
| `--ui-text-body` | 1rem | 1.125rem | Bigger base text |
| `--ui-text-h1` | 2rem | 2.5rem | Larger headings |
| `--ui-control-h-md` | 2.5rem | 2.875rem | Taller controls |
| `--ui-ring-w` | 2px | 3px | Thicker focus rings |
| `--ui-duration-normal` | 180ms | 220ms | Longer animations |
| `--ui-weight-medium` | 500 | 600 | Stronger emphasis |

See `src/theme.css` for the complete token list.

## Development

```bash
# Install dependencies
npm install

# Build the package
npm run build

# Clean build artifacts
npm run clean
```

## Publishing

This package is published to GitHub Packages:

```bash
npm publish
```

## License

MIT
