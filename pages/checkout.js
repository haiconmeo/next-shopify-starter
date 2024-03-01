// import CartTable from '@/components/CartTable'

// import { CheckoutSection } from "@/components/Checkout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import { useRouter } from "next/router";
import Price from '@/components/Price'

import SEO from '@/components/SEO'
import PageTitle from '@/components/PageTitle'
import { useCartContext } from '@/context/Store'
import { getCartSubTotal } from '@/utils/helpers'

function Checkout({ }) {
  const [cart, checkoutUrl] = useCartContext()
  const [subtotal, setSubtotal] = useState(0)
  useEffect(() => {
    setSubtotal(getCartSubTotal(cart))
  }, [cart])
  console.log("tổng",subtotal)
  // const [paymentState, dispatch] = usePaymentState();
  // const router = useRouter();
  // const { t: translate } = useTranslation();
  // const { productTotal } = useShoppingCart();
  const [imagePayment, setImagePayment] = useState(null)
  // const { handleCreatePayment } = useCheckout();
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  // const submitForm = async (data) => {
  //   dispatch({ type: "payment_loading" });
  //   if (!paymentState.paymentLoading) {
  //     await handleCreatePayment({
  //       formData: data,
  //       onSuccess: (a) => {
  //         let intervalId = setInterval(() => { checkPaid(productTotal, a[0].id) }, 1000); setTimeout(function () {
  //           clearInterval(intervalId);
  //           console.log("Interval cleared after 5 seconds");
  //         }, 300000);
  //         dispatch({ type: "payment_success" });
  //       },
  //       onError: () => {
  //         dispatch({ type: "payment_error" });
  //       },
  //     });
  //   }
  // };

  // async function checkPaid(price, content) {
  //   try {
  //     setImagePayment(`https://img.vietqr.io/image/MB-0010138254904-compact2.png?amount=${price}&addInfo=${content}`);
  //     var requestOptions = {
  //       method: 'GET',
  //       redirect: 'follow'
  //     };

  //     fetch("https://script.googleusercontent.com/macros/echo?user_content_key=Mww6umfIIOcLOE1iBvBAiJhLGyH7JND9GIV5fASanh8PAKiXcC3Ke9rZm7MqrSTyQ9pOWwBb0L5hmYZTZEo5lg1Q0lxmy8num5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnFU0eRpbMIQD1KOCn8WtvnIPyFXggmeMjsGLC3NQwui5l_FCq1LcZKqWI4pJV0sNb74-HnaTeQ-TLlQSte18Oq_q3bDFV0WdXtz9Jw9Md8uu&lib=MZ6j42VsrOSM5nGDJ9LUoxWvg6HGAYOat", requestOptions)
  //       .then(response => response.json())
  //       .then(result => {
  //         const lastPaid = result.data[result.data.length - 1];
  //         const lastPrice = lastPaid['Giá trị'];
  //         const lastContent = lastPaid['Mô tả']
  //         if (lastPrice >= price && lastContent.includes(content)) {
  //           router.replace("/order-completed");
  //         }
  //         console.log('aaaaaaaaaaa')
  //       })
  //       .catch(error => console.log('error', error));


  //   } catch (error) {

  //   }

  // }
  return (
    <div className="container mx-auto mb-20 min-h-screen">
      <SEO title='checkout' />
      <PageTitle text="Nhập địa chỉ giao hàng và thanh toán" />
      <div class="grid grid-cols-2 gap-8 grid-divider">
        <div className="col-span-2 md:col-span-1">
          <form>
            <div className="flex flex-col items-start space-y-1 flex-grow-0">
              <label className="font-primary font-normal  py-4 text-palette-primary">Địa chỉ email</label>
              <input
                type="text"
                name="email"
                // value="1"
                // onChange={(e) => updateQuantity(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col items-start space-y-1 flex-grow-0">
              <label className="font-primary font-normal  py-4 text-palette-primary">Họ và Tên</label>
              <input
                type="text"
                name="quantity"
                // value="1"
                // onChange={(e) => updateQuantity(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col items-start space-y-1 flex-grow-0">
              <label className="font-primary font-normal  py-4 text-palette-primary">Số Điện thoại</label>
              <input
                type="text"
                name="quantity"
                // value="1"
                // onChange={(e) => updateQuantity(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col items-start space-y-1 flex-grow-0">
              <label className="font-primary font-normal  py-4 text-palette-primary">Địa chỉ giao hàng</label>
              <input
                type="text"
                name="quantity"
                // value="1"
                // onChange={(e) => updateQuantity(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col items-start space-y-1 flex-grow-0">
              <label className="font-primary font-normal  py-4 text-palette-primary">Thành Phố/Tỉnh</label>
              <input
                type="text"
                name="quantity"
                // value="1"
                // onChange={(e) => updateQuantity(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col items-start space-y-1 flex-grow-0">
              <label className="font-primary font-normal  py-4 text-palette-primary">Quận/Huyện</label>
              <input
                type="text"
                name="quantity"
                // value="1"
                // onChange={(e) => updateQuantity(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col items-start space-y-1 flex-grow-0">
              <label className="font-primary font-normal  py-4 text-palette-primary">Phường/Xã</label>
              <input
                type="text"
                name="quantity"
                // value="1"
                // onChange={(e) => updateQuantity(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <div className="max-w-sm mx-auto space-y-4 px-2 py-4">
              <button
                className='pt-3 pb-2 bg-palette-primary text-white w-full mt-2 rounded-sm font-primary font-semibold text-xl flex 
        justify-center items-baseline  hover:bg-palette-dark'
                aria-label="cart-button"
              // onClick={handleAddToCart}
              >
                Thanh Toán
                <FontAwesomeIcon icon={faShoppingCart} className="w-5 ml-2" />
              </button>
            </div>
          </form>
        </div>
        <div className="md:col-span-1">
          {
            subtotal === 0 ?
              null
              : (
                <div>
                  <tr className="text-center">
                    <td></td>
                    <td className="font-primary text-base text-gray-600 font-semibold uppercase px-4 sm:px-6 py-4">Đơn Hàng</td>
                    <td className="font-primary text-lg text-palette-primary font-medium px-4 sm:px-6 py-4">
                      <Price
                        currency="đ"
                        num={subtotal}
                        numSize="text-xl"
                      />
                    </td>
                    <td></td>

                  </tr>

                  <tr className="text-center">
                    <td></td>
                    <td className="font-primary text-base text-gray-600 font-semibold uppercase px-4 sm:px-6 py-4">Tiền Ship</td>
                    <td className="font-primary text-lg text-palette-primary font-medium px-4 sm:px-6 py-4">
                      <Price
                        currency="đ"
                        num="15000"
                        numSize="text-xl"
                      />
                    </td>
                    <td></td>

                  </tr>
                  <tr className="text-center">
                    <td></td>
                    <td className="font-primary text-base text-gray-600 font-semibold uppercase px-4 sm:px-6 py-4">Tổng</td>
                    <td className="font-primary text-lg text-palette-primary font-medium px-4 sm:px-6 py-4">
                      <Price
                        currency="đ"
                        num={subtotal + 15000}
                        numSize="text-xl"
                      />
                    </td>
                    <td></td>

                  </tr>
                </div>
              )

          }
        </div>
      </div>
    </div>
  );
}

export default Checkout;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...locale,
    },
  };
}
