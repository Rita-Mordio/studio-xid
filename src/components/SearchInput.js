// 검색 Input

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
    if (event.key === "Enter") onClick();
  };

  return (
    <div className="search-input">
      <Input
        icon="search"
        placeholder="검색어를 입력해주세요."
        className="input"
        onChange={handleInputChange}
        onKeyPress={onKeyPress}
        defaultValue={searchCriteria.searchText}
      />
      <Button className="button" onClick={onClick}>
        검색
      </Button>
    </div>
  );
};

export default SearchInput;
