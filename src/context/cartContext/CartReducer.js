export const cartReducer = (globalState, action) => {

    switch (action.type) {
      case "AGRERGAR_AL_CARRITO":
        console.log(globalState.cart);
        return {
          ...globalState,
          cart: [...globalState.cart, action.payload],
        };

      case "REMOVER_DEL_CARRITO":
        return {
          ...globalState,
          cart: globalState.cart.filter((book) => book._id !== action.payload),
        };

      case "LIMPIAR_CARRITO":
        return {
          ...globalState,
          cart: [],
        };

      default:
        return globalState;
    }

}