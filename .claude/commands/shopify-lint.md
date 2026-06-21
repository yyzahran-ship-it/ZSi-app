# Shopify Theme Lint

Run theme-check on the FYSL theme files to find Liquid errors, missing schema fields, and performance issues.

## Steps

1. Run theme-check on the theme directory
2. Report errors, warnings, and suggestions

## Commands

```bash
# Lint the FYSL theme
cd /tmp/fysl-eye-theme && npx @shopify/theme-check@latest . --no-color 2>&1

# Or lint a specific file
npx @shopify/theme-check@latest sections/hero-banner.liquid
```

## What it checks
- Invalid Liquid syntax
- Missing translation keys
- Unused CSS/JS assets
- Schema validation errors
- Accessibility issues
- Performance anti-patterns
