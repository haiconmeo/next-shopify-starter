import { createCheckout, updateCheckout } from '@/lib/shopify'
import { collection, query, where, getDocs } from "firebase/firestore";
import { app, database } from 'api/db_firebase';

export  async function getDocument(collectionName) {
  const dbInstance = collection(database, 'products');

  return await getDocs(dbInstance)
        .then((data) => {
            return data.docs.map((item) => {
                return { ...item.data(), id: item.id }
            });
        })

}

export  async function getDocumentById(id) {
  const dbInstance = collection(database, 'products');

  return await getDocument(dbInstance,id)
        .then((data) => {
            return data.map((item) => {
                return { ...item, id: item.id }
            })[0];
        })

}

export function saveLocalData(cart, checkoutId, checkoutUrl) {
  localStorage.setItem(process.env.NEXT_PUBLIC_LOCAL_STORAGE_NAME, JSON.stringify([cart, checkoutId, checkoutUrl]))
}

function getLocalData() {
  return JSON.parse(localStorage.getItem(process.env.NEXT_PUBLIC_LOCAL_STORAGE_NAME))
}

export function setLocalData(setCart, setCheckoutId, setCheckoutUrl) {
  const localData = getLocalData()

  if (localData) {
    if (Array.isArray(localData[0])) {
      setCart([...localData[0]])
    }
    else {
      setCart([localData[0]])
    }
    setCheckoutId(localData[1])
    setCheckoutUrl(localData[2])
  }
}

export async function createShopifyCheckout(newItem) {
  const data = await createCheckout( newItem['variantId'], newItem['variantQuantity'])  
  return data
}

export async function updateShopifyCheckout(updatedCart, checkoutId) {
  const lineItems = updatedCart.map(item => {
    return {
      variantId: item['variantId'],
      quantity: item['variantQuantity']
    }
  })
  await updateCheckout(checkoutId, lineItems)
}

export function getCartSubTotal(cart) {
  if (cart.length === 0) {
    return 0
  }
  else {
    let totalPrice = 0
    cart.forEach(item => totalPrice += parseInt(item.variantQuantity) * parseFloat(item.variantPrice))
    return Math.round(totalPrice * 100) / 100
  }
}