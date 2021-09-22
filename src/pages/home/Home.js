import React from "react";
import Header from "../../components/header/Header";
import CardCarousel from "../../components/carousel/CardCarousel";
import CardVertical from "../../components/card_vertical/CardVertical";
import CardHorizontal from "../../components/card_horizontal/CardHorizontal";

import Cacerola from '../../components/card_horizontal/img/Cacerola.jpg'

const Home = () => {

  let recTitle = "Peceto con Groute de Queso"
  let time = 35
  let portions = 4

  let prodName = "Cacerola Clasica Marsala"
  let size = 24
  let capacity = 4.5
  let line = "Aqua"
  let imgUrl = Cacerola

  return (
    <>
      <Header />
      <CardCarousel />
      <CardVertical title={recTitle} time={time} portions={portions} />
      <CardHorizontal name={prodName} size={size} capacity={capacity} line={line} imgUrl={imgUrl} />
    </>
  );
};

export default Home;
