


export const BookCard = ({book}) => {
    return (
        <div className="book-card">
            <div className="book-card__header"> {/* BEM => Block - Element - Modificators */}
                <h2>{book.titulo}</h2>
            </div>
            <div className="book-card__body">
                <p>Autor {book.autor}</p>
                <p>Editora {book.editorial}</p>
                <div>
                    <p>Genero: {book.genero}</p>
                    <p>Páginas: {book.paginas}</p>
                </div>
                <p>Precio: <span>{book.precio}</span></p>

                <div>
                    <button>Agregar al Carrito</button>
                </div>
            </div>
        </div>
    )
    
}