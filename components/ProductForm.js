import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useCartContext, useAddToCartContext } from '@/context/Store'

function ProductForm({ product }) {
  const [quantity, setQuantity] = useState(1)
  const isLoading = useCartContext()[2]
  const addToCart = useAddToCartContext()

  const atcBtnStyle = isLoading ?
    `pt-3 pb-2 bg-palette-primary text-white w-full mt-2 rounded-sm font-primary font-semibold text-xl flex 
                      justify-center items-baseline  hover:bg-palette-dark opacity-25 cursor-none`
    :
    `pt-3 pb-2 bg-palette-primary text-white w-full mt-2 rounded-sm font-primary font-semibold text-xl flex 
                      justify-center items-baseline  hover:bg-palette-dark`


  async function handleAddToCart() {
    if (quantity !== '') {
      addToCart({
        productTitle: product.title,
        productImage: product.image,
        variantId: product.id,
        variantPrice: product.price,
        variantTitle: product.title,
        variantQuantity: quantity
      })
    }
  }

  function updateQuantity(e) {
    if (e === '') {
      setQuantity('')
    } else {
      setQuantity(Math.floor(e))
    }
  }

  return (
    <div className="w-full">
      <div className="flex justify-start space-x-2 w-full">
        <div className="flex flex-col items-start space-y-1 flex-grow-0">
          <label className="text-gray-500 text-base">Số Lượng</label>
          <input
            type="number"
            inputMode="numeric"
            id="quantity"
            name="quantity"
            min="1"
            step="1"
            value={quantity}
            onChange={(e) => updateQuantity(e.target.value)}
            className="text-gray-900 form-input border border-gray-300 w-16 rounded-sm focus:border-palette-light focus:ring-palette-light"
          />
        </div>
        {/* <div className="flex flex-col items-start space-y-1 flex-grow">
          <label className="text-gray-500 text-base">Loại</label>
          <select
            id="size-selector"
            name="size-selector"
            onChange={(event) => handleSizeChange(event.target.value)}
            value={variantId}
            className="form-select border border-gray-300 rounded-sm w-full text-gray-900 focus:border-palette-light focus:ring-palette-light"
          >
            {
              variants.map(item => (
                <option
                  id={item.id}
                  key={item.id}
                  value={item.id}
                >
                  {item.title}
                </option>
              ))
            }
          </select>
        </div> */}
      </div>
      <button
        className={atcBtnStyle}
        aria-label="cart-button"
        onClick={handleAddToCart}
      >
        Add To Cart
        <FontAwesomeIcon icon={faShoppingCart} className="w-5 ml-2" />
      </button>
    </div>
  )
}

export default ProductForm
