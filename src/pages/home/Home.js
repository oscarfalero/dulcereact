import React from "react";
import Header from "../../components/header/Header";
import CardCarousel from "../../components/carousel/CardCarousel";
import CardVertical from "../../components/card_vertical/CardVertical";
import CardHorizontal from "../../components/card_horizontal/CardHorizontal";

const Home = () => {
  return (
    <>
      <Header />
      <CardCarousel />
      <CardVertical />
      <CardHorizontal />
    </>
  );
};

export default Home;
