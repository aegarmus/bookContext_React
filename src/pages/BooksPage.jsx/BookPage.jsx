import { useContext, useEffect, useState } from "react";
import BookContext from "../../context/bookContext/BookContext";

import { BookCard } from "../../components/BookCard/BookCard";
import { NavBar } from "../../components/NavBar/NavBar";

import './BookPage.css'

export const BooksPage = () => {
  const bookCtx = useContext(BookContext);

  const { getBooks } = bookCtx;

  const [books, setBooks] = useState([]);

  const getAllBooks = async () => {
    const data = await getBooks();
    setBooks(data);
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  return (
    <>
        <NavBar />
        <h1>Books Page</h1>

        <div className="book-container">
          {
              books.map( book => (
                <BookCard book={book} key={book._id} />

              )
              )
          }

        </div>
    </>
  )
};
