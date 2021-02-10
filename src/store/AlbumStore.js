import React, { createContext, useState } from "react";

export const AlbumContext = createContext();

const AlbumStore = (props) => {
  const [album, setAlbum] = useState({})
  const albumStore = {
    state: album,
    setState: setAlbum
  }

  return <AlbumContext.Provider value={albumStore}>{props.children}</AlbumContext.Provider>
};

export default AlbumStore;
