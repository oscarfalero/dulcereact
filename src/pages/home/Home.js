import React from "react";
import Header from "../../components/header/Header";
import CardCarousel from "../../components/carousel/CardCarousel";
import ReceiptCard from "../../components/receipt_card/ReceiptCard";

const Home = () => {
  return (
    <>
      <Header />
      <CardCarousel />
      <ReceiptCard />
    </>
  );
};

export default Home;
