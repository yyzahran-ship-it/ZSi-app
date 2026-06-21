# Shopify Theme Push

Push local theme files to the Shopify store using Shopify CLI.

## Usage
Push all files from a local theme directory to the unpublished theme on the store.

## Steps

1. Check which theme directory the user wants to push (default: `/tmp/fysl-eye-theme`)
2. Run `shopify theme push` with the correct flags
3. Report success/errors

## Commands

```bash
# Push specific theme by ID (unpublished only for safety)
shopify theme push --path /tmp/fysl-eye-theme --theme 156081881266 --store fysl-group.myshopify.com --no-color

# Or push and list available themes
shopify theme list --store fysl-group.myshopify.com
```

## Notes
- Never push directly to the MAIN/published theme without explicit confirmation
- Always push to UNPUBLISHED theme first, then publish manually in Shopify Admin
- The FYSL Eyelid Massager theme ID is: `156081881266`
