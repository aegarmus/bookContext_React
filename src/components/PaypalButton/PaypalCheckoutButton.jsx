
import { PayPalButtons } from '@paypal/react-paypal-js';
import { axiosClient } from '../../config/api.config'

export const PaypalCkeckoutButton =  ({ cart, clearCart, user }) => {
    const createTransaction = async(transactionData) => {
        await axiosClient.post("/transaction" , transactionData);
    }

    const montoFinal = cart.reduce((accum, book) => accum += book.precio, 0)

    const onSuccess = async (paymentResult) => {
        const transaction = {
            userId: user._id,
            books: cart.map(book => book._id),
            amount: montoFinal,
            paymentResult
        };

        await createTransaction(transaction)
        clearCart()
    }

    return (
        <PayPalButtons 
            createOrder={ (data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            amount: {
                                value: montoFinal,
                                
                            }
                        }
                    ]
                    })
                }           
            }
            onAprove={(data, actions) => {
                    return actions.order.capture().then(onSuccess)
                }
            }
        />
    )
}