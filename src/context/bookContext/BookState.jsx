import { useReducer } from 'react'
import BookContext from './BookContext.js'
import { axiosClient } from '../../config/api.config'

import { bookReducer } from './bookReducer'

export const BookState = ({children}) => {

    const initialState = {
        books: []
    }


    const [ globalState, dispatch ] = useReducer(bookReducer, initialState)

    const getBooks = async() => {
        try {
            const { data }  = await axiosClient.get('/books')
            dispatch({
                type: 'OBTENER_LIBROS',
                payload: data.data
            })
            
            return data.data
        } catch (error) {
            throw new Error(error)
        }
    }

    return (
        <BookContext.Provider 
            value={{ 
                books: globalState.books,
                getBooks
            }}
        >
            {children}
        </BookContext.Provider>

    )
}