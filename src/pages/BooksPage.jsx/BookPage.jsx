import { useContext, useEffect, useState } from "react";
import BookContext from "../../context/bookContext/BookContext";
import { BookCard } from "../../components/BookCard/BookCard";

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
        <h1>Books Page</h1>
        {
            books.map( book => {
                <BookCard book={book} key={book._id} />
            })
        }
    </>
  )
};
