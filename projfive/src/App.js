import React from "react";
import Header from "./components/Header";

import "./styles/app.scss";
import Home from "./components/Home";
import Work from "./components/Work";
import Timeline from "./components/Timeline";
import Services from "./components/Services";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Work />
      <Timeline />
      <Services />
    </>
  );
};

export default App;
