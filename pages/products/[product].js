import { getProductSlugs, getProduct } from '@/lib/shopify'
import ProductSection from '@/components/ProductSection'
import {getDocumentById, getDocuments} from '@/utils/helpers'
function ProductPage({ productData }) {  
  return (
    <div className="min-h-screen py-12 sm:pt-20">
      <ProductSection productData={productData} />
    </div>
  )
}

export async function getStaticPaths() {
  const collectionName = "products";
  const productSlugs = await getDocuments(collectionName)

  const paths = productSlugs.map((slug) => {    
    const product = String(slug.id)
    return {
      params: { product }
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const productData = await getDocumentById(params.product)  

  return {
    props: {
      productData,
    },
  }
}

export default ProductPage
