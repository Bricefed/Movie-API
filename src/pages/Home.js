import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Search from "../components/Search";
import Card from "../components/Card";

const Home = () => {
  const [search, setSearch] = useState("code");
  const [data, setDate] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=0136914819aae8f55cc5a0bff92d6d00&query=${search}&language=fr-FR`
      )
      .then((res) => setDate(res.data.results));
  }, [search]);

  return (
    <>
      <Header />
      <Search setSearch={setSearch} />
      <div className="cards-container">
        {data.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default Home;
