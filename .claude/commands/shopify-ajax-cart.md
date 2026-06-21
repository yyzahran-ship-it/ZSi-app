# Add AJAX Cart to Shopify Theme

Integrate the liquid-ajax-cart library into the FYSL theme for seamless cart updates without page reload.

## Library location
Cloned at: `/home/user/liquid-ajax-cart/`

## Integration steps

1. Copy the bundled JS from `/home/user/liquid-ajax-cart/assets/liquid-ajax-cart.js` to theme assets
2. Add `<script src="{{ 'liquid-ajax-cart.js' | asset_url }}" defer></script>` to `layout/theme.liquid`
3. Wrap cart form with `data-ajax-cart-section` attribute
4. Add `data-ajax-cart-quantity-input` to quantity fields
5. Add cart count element with `data-ajax-cart-bind="item_count"`

## Upload asset
```python
import json
with open('/home/user/liquid-ajax-cart/assets/liquid-ajax-cart.js') as f:
    content = f.read()
# Then use themeFilesUpsert mutation to upload assets/liquid-ajax-cart.js
```
