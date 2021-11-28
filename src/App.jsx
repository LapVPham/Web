import React from "react";
import About from "./component/jsx/About";
import Contact from "./component/jsx/Contact";
import Intro from "./component/jsx/Intro";
import Works from "./component/jsx/Works";

const App = () => {
  return (
    <div>
      <Intro />
      <About />
      <Works />
      <Contact />
    </div>
  );
};

export default App;
