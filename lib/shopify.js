const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN
const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STORE_FRONT_ACCESS_TOKEN
const collection = process.env.NEXT_PUBLIC_SHOPIFY_COLLECTION

async function callShopify(query) {
  const fetchUrl = `https://${domain}/api/2021-01/graphql.json`;

  const fetchOptions = {
    endpoint: fetchUrl,
    method: "POST",
    headers: {
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  };

  try {
    const data = await fetch(fetchUrl, fetchOptions).then((response) =>
      response.json(),
    );
    return data;
  } catch (error) {
    throw new Error("Could not fetch products!");
  }
}

export async function getAllProductsInCollection() {
  // const query =
  //   `{
  //     collectionByHandle(handle: "${collection}") {
  //       id
  //       title
  //       products(first: 250) {
  //         edges {
  //           node {
  //             id
  //             title
  //             description
  //             handle
  //             images(first: 250) {
  //               edges {
  //                 node {
  //                   id
  //                   originalSrc
  //                   height
  //                   width     
  //                   altText             
  //                 }
  //               }
  //             }
  //             variants(first: 250) {
  //               edges {
  //                 node {
  //                   id
  //                   title
  //                   price                
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }`
  // ;

  // const response = await callShopify(query);

  // const allProducts = response.data.collectionByHandle.products.edges
  //   ? response.data.collectionByHandle.products.edges
  //   : [];

  return [];
}

export async function getProductSlugs() {
  const query =
    `{
      collectionByHandle(handle: "${collection}") {
        products(first: 250) {
          edges {
            node {
              handle              
            }
          }
        }
      }
    }`
  ;

  // const response = {
  //   "data": {
  //     "collectionByHandle": {
  //       "id": "some_collection_id",
  //       "title": "Example Collection",
  //       "products": {
  //         "edges": [
  //           {
  //             "node": {
  //               "id": "product1_id",
  //               "title": "Product 1",
  //               "description": "Product 1 Description",
  //               "handle": "product-1",
  //               "images": {
  //                 "edges": [
  //                   {
  //                     "node": {
  //                       "id": "image1_id",
  //                       "originalSrc": "http://example.com/image1.jpg",
  //                       "height": 600,
  //                       "width": 800,
  //                       "altText": "Product 1 Image 1"
  //                     }
  //                   },
  //                   // Additional image nodes for Product 1
  //                 ]
  //               },
  //               "variants": {
  //                 "edges": [
  //                   {
  //                     "node": {
  //                       "id": "variant1_id",
  //                       "title": "Default Title",
  //                       "price": "19.99"
  //                     }
  //                   },
  //                   // Additional variant nodes for Product 1
  //                 ]
  //               }
  //             }
  //           },
  //           // Additional product nodes for the collection
  //         ]
  //       }
  //     }
  //   }
  // }
  

  // const slugs = response.data.collectionByHandle.products.edges
  //   ? response.data.collectionByHandle.products.edges
  //   : [];

  return [];
}

export async function getProduct(handle) {
  // const query =
  //   `{
  //     productByHandle(handle: "${handle}") {
  //       id
  //       title
  //       handle
  //       description
  //       images(first: 250) {
  //         edges {
  //           node {
  //             id
  //             originalSrc
  //             height
  //             width     
  //             altText             
  //           }
  //         }
  //       }
  //       variants(first: 250) {
  //         edges {
  //           node {
  //             id
  //             title
  //             price                
  //           }
  //         }
  //       }
  //     }
  //   }`
  // ;

  // const response = await callShopify(query);

  // const product = response.data.productByHandle
  //   ? response.data.productByHandle
  //   : [];

  return [];
}

export async function createCheckout(id, quantity) {
  // const query =
  //   `mutation 
  //     {
  //       checkoutCreate(input: {
  //         lineItems: [{ variantId: "${id}", quantity: ${quantity} }]
  //       }) {
  //         checkout {
  //            id
  //            webUrl
  //            lineItems(first: 250) {
  //              edges {
  //                node {
  //                  id
  //                  title
  //                  quantity
  //                }
  //              }
  //            }
  //         }
  //       }
  //     }      
  //   `
  // ;

  // const response = await callShopify(query);

  // const checkout = response.data.checkoutCreate.checkout
  //   ? response.data.checkoutCreate.checkout
  //   : [];

  // return checkout;
  return []
}

export async function updateCheckout(id, lineItems) {  
  // const formattedLineItems = lineItems.map(item => {
  //   return `{
  //     variantId: "${item.variantId}",
  //     quantity:${item.quantity}
  //   }`
  // })

  // const query =
  //   `mutation 
  //     {
  //       checkoutLineItemsReplace(lineItems: [${formattedLineItems}], checkoutId: "${id}") {
  //         checkout {
  //            id
  //            webUrl
  //            lineItems(first: 250) {
  //              edges {
  //                node {
  //                  id
  //                  title
  //                  quantity
  //                }
  //              }
  //            }
  //         }
  //       }
  //     }      
  //   `
  // ;

  // const response = await callShopify(query);

  // const checkout = response.data.checkoutLineItemsReplace.checkout
  //   ? response.data.checkoutLineItemsReplace.checkout
  //   : [];

  // return checkout;
  return []
}
