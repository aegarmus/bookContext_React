import { AppRouter } from "./router/AppRouter"


import { UserState } from './context/userContext/UserState'
import { BookState } from './context/bookContext/BookState'
import { CartState } from "./context/cartContext/CartState.jsx"


export const App = () => {
  return (
    <>
      
        <UserState>
          <BookState>
            <CartState>
              <AppRouter />
            </CartState>
          </BookState>
        </UserState>
   
    </>
  );
} 