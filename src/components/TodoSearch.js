import React from "react";
import { TodoContext } from "../context/TodoContext";

import "../css/TodoSearch.css";

function TodoSearch() {
    const {searchValue, setSearchValue} = React.useContext(TodoContext);

  return (
    <input
      className="filter-todos"
      placeholder="Play basketball"
      value={searchValue}
      onChange={(e) => {
        setSearchValue(e.target.value);
      }}
    />
  );
}

export { TodoSearch };
