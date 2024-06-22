import { useReducer } from "react";
import CartContext from "./CartContext";
import { cartReducer } from "./CartReducer";

export const CartState = ({ children }) => {
    const initialState = {
        cart: []
    }

    const [ globalState, dispatch ] = useReducer(cartReducer, initialState)

    const addToCart = (book) => {

        console.log( globalState.cart)

        dispatch({
            type: "AGRERGAR_AL_CARRITO",
            payload: book
        })
    }

    const removeFromCart = (bookId) => {
        dispatch({
            type: "REMOVER_DEL_CARRITO",
            payload: bookId
        })
    }

    const clearCart = () => {
        dispatch({
            type: "LIMPIAR_CARRITO"
        })
    }

    return (
        <CartContext.Provider 
            value={{
                cart: globalState.cart,
                addToCart,
                removeFromCart,
                clearCart
            }}
        >
            {children}
        </CartContext.Provider>
    )
}