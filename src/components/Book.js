import "../App.css";
import { PropTypes } from "prop-types";
const Book = ({  bookInfo ,UpdateShelfOfBook}) => {
  const handleChangeShelf = (event) => {
     const newShelf=event.target.value;
     UpdateShelfOfBook(bookInfo,newShelf);
  };

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${bookInfo.imageLinks.thumbnail})`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select defaultValue={bookInfo.shelf} onChange={handleChangeShelf}>
              <option value="none" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{bookInfo.title}</div>
        <div className="book-authors">
          {bookInfo.authors && bookInfo.authors.join(', ')}
        </div>
      </div>
    </li>
  );
};

 Book.propTypes = {
  bookInfo: PropTypes.object.isRequired,
  UpdateShelfOfBook:  PropTypes.func.isRequired,
};

export default Book;
