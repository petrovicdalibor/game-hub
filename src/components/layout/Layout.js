import Header from "../header/Header";

import Sidebar from "../sidebar/Sidebar";

import classes from "./Layout.module.css";

function Layout({ children, onSelectGenre, onSearchGames }) {
  return (
    <>
      <Header onSearchGames={onSearchGames} />
      <div className={classes.layout}>
        <Sidebar onSelectGenre={onSelectGenre} />
        {children}
      </div>
    </>
  );
}

export default Layout;
