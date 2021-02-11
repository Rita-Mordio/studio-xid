//페이지 이동시 검색조건을 유지하기 위해 사용

import React, { createContext, useState } from "react";

export const SearchContext = createContext();

const SearchStore = (props) => {
  const [searchCriteria, setSearchCriteria] = useState({
    searchText: "",
    orderType: "",
  });
  const searchStore = {
    searchCriteria,
    setSearchCriteria,
  };

  return (
    <SearchContext.Provider value={searchStore}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchStore;
