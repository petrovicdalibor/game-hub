import React from "react";
import SearchInput from "./SearchInput";

import classes from "./Header.module.css";

function Header({ onSearchGames }) {
  return (
    <header className={classes.header}>
      <div className={classes.header__wrapper}>
        <div className={classes.logo}>RAWG</div>
        <div className={classes.header__search}>
          <SearchInput onSearchGames={onSearchGames} />
        </div>
      </div>
    </header>
  );
}

export default Header;
