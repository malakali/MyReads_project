import "./App.css";
import ShelvesList from "./components/ShelvesList";
import SearchBooks from "./components/SearchBooks";
import { useEffect, useState } from "react";
import * as BooksAPI from "./BooksAPI";
import { Routes, Route } from "react-router-dom";

function App() {
  const [Books, setBooks] = useState([]);
  const ShelfNames = [
    { id: "currentlyReading", Name: "Currently Reading" },
    { id: "wantToRead", Name: "Want to Read" },
    { id: "read", Name: "Read" },
  ];

  useEffect(() => {
    const getAllBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };

    getAllBooks();

    return () => {
      setBooks([]);
    }
     
  }, []);

  const UpdateShelfOfBook = (Book, shelf) => {

    const Update = async () => {
      const ExeculdeBook = Books.filter(b=>b.id !== Book.id);
      Book.shelf=shelf;
      setBooks(ExeculdeBook.concat(Book));
      await BooksAPI.update(Book, shelf);
    };
     Update();
     
  };

  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <ShelvesList
              ShelfNames={ShelfNames}
              Books={Books}
              UpdateShelfOfBook={UpdateShelfOfBook}
            />
          }
        />

        <Route
          path="/search"
          element={
            <SearchBooks Books={Books} UpdateShelfOfBook={UpdateShelfOfBook} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
