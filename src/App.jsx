import { AppRouter } from "./router/AppRouter"

import { UserState } from './context/userContext/UserState'
import { BookState } from './context/bookContext/BookState'


export const App = () => {
  return(
    <>
    <UserState>
      <BookState>
        <AppRouter />
      </BookState>
    </UserState>
    </>
  )
} 