# Shopify Theme Sync

Download the live theme from Shopify, make edits, and push changes back — full dev workflow.

## Steps

### Pull (download) a theme
```bash
mkdir -p /tmp/theme-sync && cd /tmp/theme-sync
shopify theme pull --theme 156081881266 --store fysl-group.myshopify.com --path ./fysl-eyelid
```

### Watch mode (auto-push on file save)
```bash
shopify theme dev --theme 156081881266 --store fysl-group.myshopify.com --path /tmp/fysl-eye-theme
```

### Push single file
Use `themeFilesUpsert` GraphQL mutation with the Shopify MCP tool — faster than full CLI push.

### Reference theme
The full Dawn reference theme is at: `/home/user/shopify-dawn/`
Study Dawn sections for best practices before building custom sections.

## Theme IDs
- FYSL Eyelid Massager (unpublished): `156081881266`
- FYSL Theme v2 (MAIN/live): `155381825714`
- Horizon (unpublished): `153613435058`
