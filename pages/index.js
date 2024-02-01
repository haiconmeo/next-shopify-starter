import StoreHeading from '@/components/StoreHeading'
import ProductListings from '@/components/ProductListings'
import { getAllProductsInCollection } from '@/lib/shopify'

function IndexPage({ products }) {
  console.log(products)
  return (
    <div className="mx-auto max-w-6xl">
      <StoreHeading />
      <ProductListings products={products} />
    </div>
  )
}

export async function getStaticProps() {
  // const products = await getAllProductsInCollection()
  const products = [{
    node: {
      handle: 1, "title": "22", "description": "description", "variants":
      {
        "edges": [{ "node": { "price": 0 } }]
      },
      images: { "edges": [{ "node": {"originalSrc":"https://doggystickers.vercel.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F2800%2F2014%2Fproducts%2Fmockup-fc750eaa.jpg%3Fv%3D1616988549&w=2048&q=75"} }] }
    },
    
  },{
    node: {
      handle: 1, "title": "22", "description": "description", "variants":
      {
        "edges": [{ "node": { "price": 0 } }]
      },
      images: { "edges": [{ "node": {"originalSrc":"https://doggystickers.vercel.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F2800%2F2014%2Fproducts%2Fmockup-fc750eaa.jpg%3Fv%3D1616988549&w=2048&q=75"} }] }
    },
    
  },{
    node: {
      handle: 1, "title": "22", "description": "description", "variants":
      {
        "edges": [{ "node": { "price": 0 } }]
      },
      images: { "edges": [{ "node": {"originalSrc":"https://doggystickers.vercel.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F2800%2F2014%2Fproducts%2Fmockup-fc750eaa.jpg%3Fv%3D1616988549&w=2048&q=75"} }] }
    },
    
  },{
    node: {
      handle: 1, "title": "22", "description": "description", "variants":
      {
        "edges": [{ "node": { "price": 0 } }]
      },
      images: { "edges": [{ "node": {"originalSrc":"https://doggystickers.vercel.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F2800%2F2014%2Fproducts%2Fmockup-fc750eaa.jpg%3Fv%3D1616988549&w=2048&q=75"} }] }
    },
    
  }]
  return {
    props: {
      products
    },
  }
}

export default IndexPage
