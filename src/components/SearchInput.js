import React, { useState } from "react";
import { Input, Button } from "semantic-ui-react";

const SearchInput = ({ searchCriteria, setSearchCriteria }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event, { value }) => setInputValue(value);

  const onClick = () => {
    setSearchCriteria({
      ...searchCriteria,
      searchText: inputValue,
    });
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      onClick();
    }
  };

  return (
    <div className="search-input">
      <Input
        icon="search"
        placeholder="검색"
        className="input"
        onChange={handleInputChange}
        onKeyPress={onKeyPress}
      />
      <Button className="button" onClick={onClick}>
        검색
      </Button>
    </div>
  );
};

export default SearchInput;
