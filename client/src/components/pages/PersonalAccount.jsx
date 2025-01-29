import { useEffect, useState } from "react";
import axios from "axios";
// import BookCard from "../ui/BookCard";
export default function PersonalAccount() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios("/api/books")
      .then(({ data }) => setBooks(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="row mt-4 m-4">
      {books.map((book) => (
        <div key={book.id} className="col-3">
          <BookCard book={book} />
        </div>
      ))}
    </div>
  );
}
