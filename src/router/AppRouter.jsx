
import { Routes, Route } from 'react-router-dom'

import { HomePage } from '../pages/HomePage.jsx'
import { SignUpPage } from '../pages/SignUpPage.jsx'
import { LoginPage } from '../pages/LoginPage.jsx'
import { UserPage } from '../pages/UsersPage.jsx'
import { BooksPage } from '../pages/BooksPage.jsx/BookPage.jsx'
import { CartPage } from '../pages/CartPage/CartPage.jsx'

export const AppRouter = () => {
    return(
        <>
            <Routes>
                    <Route index element={<HomePage />} />
                    <Route path='signup' element={<SignUpPage />} />
                    <Route path='login' element={<LoginPage />} />
                    <Route path='users' element={<UserPage />} />
                    <Route path='/books' element={<BooksPage />}/>
                    <Route path='/payment' element={<CartPage />} />
            </Routes>
        </>
    )
}