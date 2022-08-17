import "../App.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Book from "./Book";
import * as BooksAPI from "../BooksAPI";

const SearchBooks = ({ Books, UpdateShelfOfBook }) => {
  const [query, setquery] = useState("");
  const [searchBooks, setSearchBooks] = useState([]);

  const handelQuery = (event) => {
    setquery(event.target.value);
    UpdateSearch(event.target.value.trim());
  };

  const UpdateSearch = (inputSearch) => {
    if (inputSearch.length === 0) {
      setSearchBooks([]);
    } else {
      BooksAPI.search(inputSearch, 20).then((searchBooks) => {
        if (searchBooks.error) {
          setSearchBooks([]);
        } else {
          searchBooks.forEach((searchedBook) => {
            let basicBook = Books.find((b) => b.id === searchedBook.id);
            basicBook
              ? (searchedBook.shelf = basicBook.shelf)
              : (searchedBook.shelf = "none");

            if (!searchedBook.imageLinks) {
              searchedBook.imageLinks = { thumbnail: "" };
            }
          });
          setSearchBooks(searchBooks);
        }
      });
    }
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={handelQuery}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          { searchBooks.map((b) => (
            <Book
              key={b.id}
              bookInfo={b}
              UpdateShelfOfBook={UpdateShelfOfBook}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default SearchBooks;
