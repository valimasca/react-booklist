import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { books } from "./books";

import Book from "./Book";

// const author = "Amelia Hepworth";
// const title = "I love you to the moon and back";
// const img =
//   "https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX482_BO1,204,203,200_.jpg";

function BookList() {
  return (
    <section className="booklist">
      {/* <Book
        //here img is a prop and then in the {} we are setting it's value
        //then that it is passed to the Book component
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      > */}
      {/* this is a props child */}
      {/* <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione,
          inventore.
        </p> */}
      {/* </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      /> */}

      {books.map((book) => {
        // const { img, title, author } = book;
        return <Book key={book.id} {...book}></Book>;
        //{...book} can be book={book}
      })}
    </section>
  );
}
//inside the funciton Booklist at the Book component
// we are passing the props at render time
//on line 22 we are passing in props
//children is a prop and the name is important

ReactDOM.render(<BookList />, document.getElementById("root"));
