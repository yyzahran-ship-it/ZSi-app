# Create Shopify Product

Create a new product in the FYSL Shopify store with full details, variants, and images.

## Arguments
$ARGUMENTS — product details (name, description, price, variants)

## Steps

1. Parse product information from $ARGUMENTS
2. Use `mcp__9e0cbc9b-0c70-400c-b8c3-dda219d0113d__create-product` or `graphql_mutation` to create the product
3. Assign it to the appropriate collection
4. Set inventory levels if specified

## GraphQL mutation to use
```graphql
mutation CreateProduct($input: ProductInput!) {
  productCreate(input: $input) {
    product {
      id
      title
      handle
      variants(first: 5) { edges { node { id price } } }
    }
    userErrors { field message }
  }
}
```

## Notes
- Always set `status: DRAFT` first, review, then set to ACTIVE
- FYSL store collections: check existing collections before creating new ones
- Default vendor: "FYSL GROUP"
