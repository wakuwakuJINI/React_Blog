import { useState } from "react";
import "./app.css";
import Header from "./Components/Header";
import AsideBar from "./Components/AsideBar";
import Main from "./Components/Board";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        {/* <AsideBar /> */}
        <Main />
      </div>
      <Footer />
    </>
  );
}

export default App;
