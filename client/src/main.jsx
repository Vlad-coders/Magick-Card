import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";
import App from "./App.jsx";
import './main.css'
import { BrowserRouter } from "react-router";


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// // import { StrictMode } from "react";
// // import { createRoot } from "react-dom/client";
// // import ReactDOM from "react-dom/client";
// // import App from "./App.jsx";
// // import "bootstrap/dist/css/bootstrap.min.css";
// // import "bootstrap/dist/js/bootstrap.min.js";
// // import App from "./App.jsx";

// // createRoot(document.getElementById("root")).render(
// //   <StrictMode>
// //     <App />
// //   </StrictMode>
// // );
// import { useEffect, useState } from "react";
// import axios from "axios";
// import PersonalAccount from "./ui/NavBar";
// export default function MainPage() {
//   const [books, setBooks] = useState([]);
//   useEffect(() => {
//     axios("/api/books")
//       .then(({ data }) => setBooks(data))
//       .catch((error) => console.log(error));
//   }, []);
//   return (
//     <div className="row mt-4 m-4">
//       {books.map((book) => (
//         <div key={book.id} className="col-3">
//           <PersonalAccount book={book} />
//         </div>
//       ))}
//     </div>
//   );
// }
