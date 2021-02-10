import React, { useState } from "react";
import { Input } from "semantic-ui-react";

const SearchInput = ({ searchCriteria, setSearchCriteria }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event, { value }) => setInputValue(value);

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      setSearchCriteria({
        ...searchCriteria,
        searchText: inputValue,
      });
    }
  };

  return (
    <Input
      icon="search"
      placeholder="검색"
      className="search-input"
      onChange={handleInputChange}
      onKeyPress={onKeyPress}
    />
  );
};

export default SearchInput;
