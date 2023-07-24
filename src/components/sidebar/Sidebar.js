import classes from "./Sidebar.module.css";
import SidebarItem from "./SidebarItem";

import { genres } from "../data/genres";

function Sidebar({ onSelectGenre }) {
  return (
    <div>
      <section className={classes.sidebar}>
        <div className={classes.sidebar__heading}>
          <h2>Genres</h2>
        </div>
        <div className={classes.sidebar__items}>
          {genres.map((genre) => (
            <SidebarItem
              genre={genre}
              key={genre.id}
              onSelectGenre={onSelectGenre}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Sidebar;
