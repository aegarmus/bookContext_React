import './BookCard.css'


export const BookCard = ({book}) => {
    return (
      <div className="book-card">
        <div className="book-card__header">
          <h2>{book.titulo}</h2>
        </div>
        <div className="book-card__body">
            <div className='card-body__body__items'>
                <p>
                    <span className="book-card__item">Autor: </span> {book.autor}
                </p>
                <p>
                    <span className="book-card__item">Editora: </span> {book.editorial}
                </p>
                <div>
                    <p>
                        <span className="book-card__item">Genero: </span> {book.genero}
                    </p>
                    <p>
                        <span className="book-card__item">Páginas: </span>
                        {book.paginas}
                    </p>
                </div>
                <p>
                    <span className="book-card__item">Precio: </span>
                    <span className="book-card__price">$ {book.precio}</span>
                </p>

            </div>

          <div className='book-card__body__button'>
            <button>Agregar al Carrito</button>
          </div>
        </div>
      </div>
    );
    
}