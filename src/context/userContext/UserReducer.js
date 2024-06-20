export const reducer = (globalState, action) => { //Esto se conoce como función Reductora!

    switch(action.type) {

        case "REGISTRAR_USUARIO":
            localStorage.setItem('token', action.payload.token)

            return {
                ...globalState,
                userData: action.payload.user,
                authStatus: true
            }
        
        case "LOGIN_EXITOSO":
            localStorage.setItem('token', action.payload.token)
            console.log(action.payload)
            return {
                ...globalState,
                userData : action.payload.user,
                authStatus : true
            }

        case "OBTENER_USUARIO":

        return {
            ...globalState,
            userData: action.payload,
            authStatus: true
        }

        case "LOGOUT":
            localStorage.removeItem('token')

            return {
                userData: {},
                usersList: [],
                authStatus: false
            }
        
        case "OBTENER_USUARIOS":
            
            return {
              ...globalState,
              usersList: action.payload.allUsers,
              authStatus: true,
            };
    }
}


