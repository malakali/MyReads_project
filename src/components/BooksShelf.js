import "../App.css";
import Book from "./Book";
import { PropTypes } from "prop-types";

const BooksShelf = ({ ShelfName, Books, UpdateShelfOfBook }) => {
  const BooksForThisShelf = Books.filter((x) => x.shelf === ShelfName.id);

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{ShelfName.Name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {BooksForThisShelf.map((book) => (
            <Book
              key={book.id} 
              bookInfo={book}
              UpdateShelfOfBook={UpdateShelfOfBook}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};
BooksShelf.propTypes = {
  ShelfName: PropTypes.object.isRequired,
  Books: PropTypes.array.isRequired,
  UpdateShelfOfBook:  PropTypes.func.isRequired,
};
 
export default BooksShelf;
