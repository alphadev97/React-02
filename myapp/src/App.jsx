// Default Import

import MyHeading from "./components/MyHeading";

// Import specific function
import { MyHeadingLil, MyHeadingLil2 } from "./components/MyHeading";

// Import specific function with your name using "as"
import { MyHeadingLil3 as MerName } from "./components/MyHeading";

// You can merge both 1st and 2nd import like this
// import MyHeading, { MyHeadingLil, MyHeadingLil2 } from "./components/MyHeading";

function App() {
  return (
    <div>
      <MyHeading name="Props" text="Good" />
      <MyHeadingLil />
      <MyHeadingLil2 />
      <MerName />
      <h1>Welcome to React</h1>
    </div>
  );
}

export default App;
