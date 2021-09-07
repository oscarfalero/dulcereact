import React from "react";
import Header from "../../components/header/Header";
import CardCarousel from "../../components/carousel/CardCarousel";
import CardVertical from "../../components/card_vertical/CardVertical";

const Home = () => {
  return (
    <>
      <Header />
      <CardCarousel />
      <CardVertical />
    </>
  );
};

export default Home;
