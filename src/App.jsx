import React from "react";

import Footer from "./layout/Footer";
import Navb from "./layout/Navb";
import Main from "./layout/Main";

export default function App() {
  return (
    <div className="App container-fluid">
      <Navb />
      <Main />
      <Footer />
    </div>
  );
}
