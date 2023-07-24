import React from "react";

import classes from "./SidebarItem.module.css";

function SidebarItem({ genre, onSelectGenre }) {
  function onSelectGenreHandle(genreId) {
    onSelectGenre(genreId);
  }

  return (
    <div
      className={classes.sidebar__item}
      onClick={() => onSelectGenreHandle(genre.id)}
    >
      <div className={classes.sidebar__img}>
        <img src={genre.image_background} alt="..." />
      </div>
      <p>{genre.name}</p>
    </div>
  );
}

export default SidebarItem;
