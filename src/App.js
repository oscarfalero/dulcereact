import React from "react";
import Header from "./components/header/Header";
import TopHeader from "./components/topheader/TopHeader";
import NavBar from "./components/navbar/NavBar";
import CardCarousel from "./components/carousel/CardCarousel";

function App() {
  return (
    <>
      <TopHeader />
      <Header />
      <NavBar />
      <CardCarousel />
    </>
  );
}

export default App;
