import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

import classes from "./Header.module.css";
import { useRef } from "react";

function SearchInput({ onSearchGames }) {
  const searchInput = useRef(null);

  function onSearchGamesHandler(text) {
    onSearchGames(searchInput.current.value);
    // searchInput.current.value = "";
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearchGamesHandler(searchInput.current.value);
      }}
    >
      <InputGroup className={classes.header__input_group}>
        <InputLeftElement
          children={<BsSearch />}
          className={classes.input__icon}
        />
        <Input
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
          ref={searchInput}
        />
      </InputGroup>
    </form>
  );
}

export default SearchInput;
