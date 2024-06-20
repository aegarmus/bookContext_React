export const bookReducer = (globalState, action) => {

    switch(action.type) {
        case "OBTENER_LIBROS":
            return {
                ...globalState,
                books: action.payload
            }
        default: 
            return globalState
        
    }

}