import React from "react";

import * as Data from "./data/data.json";

import Header from "./components/Header";
import ListLayout from "./components/ListLayout";
import Footer from "./components/Footer";

import Wrapper from "./sharedComponents/Wrapper";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Wrapper>
        <ListLayout posts={Data} />
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
