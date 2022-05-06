import React from "react";
import CocktailList from "../components/CocktailList";
import SearchInput from "../components/SearchInput/SearchInput";

const Home = () => {
  return (
    <>
      <h2>Single Cocktail</h2>
      <SearchInput />
      <CocktailList />
    </>
  );
};

export default Home;
