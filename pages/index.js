import StoreHeading from '@/components/StoreHeading'
import ProductListings from '@/components/ProductListings'
import { getAllProductsInCollection } from '@/lib/shopify'
import {getDocument} from '@/utils/helpers'
import { collection, query, where, getDocs } from "firebase/firestore";
import { app, database } from 'api/db_firebase';
function IndexPage({ products }) {
  return (
    <div className="mx-auto max-w-6xl">
      <StoreHeading />
      <ProductListings products={products} />
    </div>
  )
}

export async function getStaticProps() {
  const collectionName = "products";
  const products = await getDocument(collectionName)
  // const products = await getAllProductsInCollection()
  return {
    props: {
      products
    },
  }
}

export default IndexPage
