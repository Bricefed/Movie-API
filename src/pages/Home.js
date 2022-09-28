import React from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Card from "../components/Card";

const Home = () => {
  return (
    <>
      <Header />
      <Search />
      <div className="cards-container">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default Home;
