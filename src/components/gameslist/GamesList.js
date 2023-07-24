import React, { useEffect, useState } from "react";
import GameCard from "../gamecard/GameCard";

import classes from "./GamesList.module.css";
import axios from "axios";

function GamesList({ genre, selectedPlatform, searchInput }) {
  const [isLoading, setIsLoading] = useState(true);
  const [games, setGames] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    const isGenreSelected = genre ? `genres=${genre}&` : "";
    const isPlatformSelected = selectedPlatform
      ? `parent_platforms=${selectedPlatform}&`
      : "";
    const isSearchInput = searchInput
      ? `search=${searchInput}&search_precise=1&`
      : "";

    axios
      .get(
        `https://api.rawg.io/api/games?${isSearchInput}${isGenreSelected}${isPlatformSelected}&key=44bf5fb0ba0a4da8bb26af649ab24de1`
      )
      .then((res) => {
        console.log(res.data.results);
        setGames(res.data.results);
        setIsLoading(false);
      });
  }, [genre, selectedPlatform, searchInput]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className={classes.main__games}>
      {games.map((game) => (
        <GameCard game={game} key={game.id} />
      ))}
    </div>
  );
}

export default GamesList;
