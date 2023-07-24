import { useState } from "react";
import Layout from "./components/layout/Layout";
import Main from "./components/main/Main";

function App() {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [searchInput, setSearchInput] = useState(null);

  function selectGenre(genreId) {
    setSelectedGenre(genreId);
  }

  function searchGames(text) {
    setSearchInput(text);
    console.log("Search statement: " + text);
  }

  return (
    <Layout onSelectGenre={selectGenre} onSearchGames={searchGames}>
      <Main genre={selectedGenre} searchInput={searchInput} />
    </Layout>
  );
}

export default App;
