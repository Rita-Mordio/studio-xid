import React from "react";
import { Route } from "react-router-dom";

import Albums from "./pages/Albums";
import Album from "./pages/Album";

import SearchStore from "./store/SearchStore";

const App = () => {
  return (
    <>
      <SearchStore>
        <Route path="/" component={Albums} exact={true} />
        <Route path="/albums" component={Albums} exact={true} />
        <Route path="/album" component={Album} />
      </SearchStore>
    </>
  );
};

export default App;
