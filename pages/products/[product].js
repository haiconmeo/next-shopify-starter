import ProductSection from '@/components/ProductSection'
import {getRecords, getRecord} from '@/utils/airtable'
function ProductPage({ productData }) {  
  return (
    <div className="min-h-screen py-12 sm:pt-20">
      <ProductSection productData={productData} />
    </div>
  )
}

export async function getStaticPaths() {
  const collectionName = "Product";
  const productSlugs = await getRecords(collectionName)

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
  const collectionName = "Product";
  const productData = await getRecord(collectionName,params.product)  
  return {
    props: {
      productData,
    },
  }
}

export default ProductPage
