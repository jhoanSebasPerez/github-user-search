import { useRef, useContext } from "react";
import AppContext from "../../context/AppContext";
import Icon from "../Icon";
import { Search, Input, NoResult, Button } from "./Search.style";

const SearchComponent = () => {
  const inputText = useRef(null);
  const {
    state: { darkMode, noResult },
    updateSearchText,
  } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.current.value === "") return;
    updateSearchText(inputText.current.value);
  };

  return (
    <Search darkMode={darkMode}>
      <Icon type="search" className="search" />
      <Input
        darkMode={darkMode}
        ref={inputText}
        type="text"
        placeholder="Search GitHub username..."
        required
      />
      {noResult && <NoResult>No results</NoResult>}
      <Button onClick={handleSubmit} type="submit">
        Search
      </Button>
    </Search>
  );
};

export default SearchComponent;
