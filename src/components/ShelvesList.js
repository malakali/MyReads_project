import BooksShelf from "./BooksShelf";
import "../App.css";
 import {  Link} from "react-router-dom";
 import { PropTypes } from "prop-types";

const ShelvesList = ({ ShelfNames, Books ,UpdateShelfOfBook}) => {
  return (
    <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content"></div>
    <div className="list-books-content">
      {ShelfNames.map((shelf) => (
        <BooksShelf key={shelf.id} ShelfName={shelf} Books={Books}  UpdateShelfOfBook={UpdateShelfOfBook}/>
      ))}
    </div>
    <div className="open-search">
     <Link  to="/search" >
     Add a book
        </Link>
    </div>
    </div>
  );
};
ShelvesList.propTypes = {
  ShelfName: PropTypes.array,
  Books: PropTypes.array.isRequired,
  UpdateShelfOfBook:  PropTypes.func.isRequired,
};
export default ShelvesList;
