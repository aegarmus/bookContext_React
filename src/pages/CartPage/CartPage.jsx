import { useContext } from "react"
import CartContext from "../../context/cartContext/CartContext"
import { PaypalCkeckoutButton } from "../../components/PaypalButton/PaypalCheckoutButton"
import UsersContext from "../../context/userContext/UsersContext"



export const CartPage = () => {
    const cartCtx = useContext(CartContext)
    const { cart, removeFromCart, clearCart } = cartCtx

    const userCtx = useContext(UsersContext)
    const { userData } = userCtx

    return (
        <>
            <h1>Carrito de Compras</h1>
            {
                cart.length === 0 ? (
                    <>
                        <p>Aún no hay libros en tu Carrito :c</p>
                        <p>Echa un vistazo para encontrar lo que te interese</p>    
                    </>
                ) : (
                    <>
                        {
                            cart.map(book => (
                                <div key={book.id}>
                                    <h2>{book.titulo}</h2>
                                    <p>$ {book.precio}</p>
                                   {/*  <div>
                                        <label htmlFor="cantidad">Cantidad</label>
                                        <input type="Number" name="cantidad" value={1} />
                                    </div> */}
                                    <button onClick={() => removeFromCart(book._id)}>Eliminar</button>
                                </div>
                            ))
                        }

                        <PaypalCkeckoutButton className="paypal" cart={cart} clearCart={clearCart} user={userData} />
                    </>
                )
            }
        </>
    )
}