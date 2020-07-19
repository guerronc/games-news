import React, { Fragment } from "react";
import "./assets/styles/styles.scss";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

const App = () => {
  return (
    <Fragment>
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </Fragment>
  );
};

export default App;
