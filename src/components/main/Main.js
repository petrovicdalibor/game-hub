import classes from "./Main.module.css";
import { useState } from "react";
import Dropdown from "../dropdown/Dropdown";
import GamesList from "../gameslist/GamesList";

function Main({ genre, searchInput }) {
  const [selectedPlatform, setSelectedPlatform] = useState(6);

  function onSelectPlatformHandler(platformId) {
    setSelectedPlatform(platformId);
    console.log("Platform Selected: " + platformId);
  }

  return (
    <section className={classes.main}>
      <h1>Games</h1>

      <div className={classes.main__filters}>
        <Dropdown
          selectPlatform={onSelectPlatformHandler}
          selectedPlatform={selectedPlatform}
        />
      </div>
      <GamesList
        genre={genre}
        selectedPlatform={selectedPlatform}
        searchInput={searchInput}
      />
    </section>
  );
}

export default Main;
