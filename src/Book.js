import React from "react";

// const Book = (props) => {....}
const Book = ({ img, title, author }) => {
  //we can distructure the object either inside the function or where the props are
  //con
  //adding events: we need an attribute and an eventHandler
  //onClick, onMouseOver
  const clickHandler = () => {
    alert("hi there!");
  };

  const complexExample = (author) => {
    console.log(author);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img style={{ width: "150px", height: "150px" }} alt="" src={img} />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Click me
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        Complex button
      </button>
      {/* {children} */}
    </article>
  );
};

export default Book;
