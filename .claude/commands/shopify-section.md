# Create Shopify Section

Scaffold a new Liquid section for the FYSL Shopify theme with proper schema, CSS classes, and settings.

## Arguments
$ARGUMENTS — name and description of the section (e.g. "product-badges A row of trust badge icons")

## Steps

1. Parse the section name and description from $ARGUMENTS
2. Create the section file at `/tmp/fysl-eye-theme/sections/<name>.liquid`
3. Include:
   - HTML using BEM-style class names matching the FYSL CSS variables (--gold, --bg, --text, etc.)
   - A complete `{% schema %}` block with sensible settings and blocks
   - A `{% stylesheet %}` block (optional) for section-specific CSS
4. Upload the section to the theme via `mcp__9e0cbc9b-0c70-400c-b8c3-dda219d0113d__graphql_mutation` using `themeFilesUpsert`

## Design tokens to use
```
--bg: #080810       (dark background)
--surface: #0F0F1A  (card backgrounds)
--gold: #C9A84C     (gold accent)
--gold-lt: #E8C56A  (light gold)
--text: #F5F0E8     (warm white)
--muted: rgba(245,240,232,.55) (muted text)
--border: rgba(255,255,255,.07)
```

## Section template
```liquid
<section class="SECTION-NAME section-padding" id="SECTION-NAME">
  <div class="container">
    <!-- content -->
  </div>
</section>

{% schema %}
{
  "name": "Section Name",
  "settings": [
    {"type": "text", "id": "heading", "label": "Heading", "default": "Default Heading"}
  ],
  "blocks": [],
  "presets": [{"name": "Section Name"}]
}
{% endschema %}
```
