import React from "react";

const MyHeading = (props) => {
  const name = props.text;

  //   Destructuring

  const obj = {
    first: 01,
    second: 02,
  };
  return (
    <>
      <h1>My Heading</h1>
      <h1>{props.name}</h1>
      <p>{name}</p>

      <main>This is main</main>
      <footer>This is footer</footer>
    </>
  );
};

const MyHeadingLil = () => <h4>Heading 4</h4>;
const MyHeadingLil2 = () => <h4>Heading 4</h4>;
const MyHeadingLil3 = () => <h4>Heading 4</h4>;

export default MyHeading;
export { MyHeadingLil, MyHeadingLil2, MyHeadingLil3 };
