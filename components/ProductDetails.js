import { useState } from 'react'
import BackToProductButton from '@/components/BackToProductButton'
import ProductInfo from '@/components/ProductInfo'
import ProductForm from '@/components/ProductForm'

function ProductDetails({ productData }) {
  const [variantPrice, setVariantPrice] = useState(productData.variants[0].price)

  return (
    <div className="flex flex-col justify-between h-full w-full md:w-1/2 max-w-xs mx-auto space-y-4 min-h-128">
      <BackToProductButton />
      <ProductInfo 
        title={productData.title}
        description={productData.description}
        price={variantPrice}
      />
      <ProductForm 
        title={productData.title}
        handle={productData.handle}
        variants={productData.variants} 
        mainImg={productData.variants[0].image}
        setVariantPrice={setVariantPrice}
      />
      
    </div>
  )
}

export default ProductDetails
