import React from "react";
import { Route } from "react-router-dom";

import Albums from "./pages/Albums";
import Album from "./pages/Album";

const App = () => {
  return (
    <>
      <Route path="/" component={Albums} exact={true} />
      <Route path="/album" component={Album} />
    </>
  );
};

export default App;
