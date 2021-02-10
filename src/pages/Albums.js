import React, { useState, useEffect } from "react";
import { Card, Container, Divider, Loader, Dimmer, Grid } from "semantic-ui-react";
import FadeIn from 'react-fade-in';
import axios from "axios";
import _ from "lodash";

import SearchInput from "../components/SearchInput";
import OrderDropdown from "../components/OrderDropdown";
import AlbumCard from "../components/AlbumCard";

const Albums = () => {
  const [showLoader, setShowLoader] = useState(false)
  const [albumItems, setAlbumItems] = useState([])
  const [searchCriteria, setSearchCriteria] = useState({
    searchText: "",
    orderType: "",
  });

  useEffect(() => {
    sortAlbumItem();
  }, [searchCriteria]);

  const getAlbums = () => {
    setShowLoader(true);
    return axios.get(
      "https://itunes.apple.com/us/rss/topalbums/limit=100/json"
    );
  };

  const sortAlbumItem = async () => {
    const albumItems = await getAlbums();

    const searchResult = _.filter(albumItems.data.feed.entry, (item) => {
      return (
        item["im:name"].label
          .toLowerCase()
          .indexOf(searchCriteria.searchText) !== -1
      );
    });

    switch (searchCriteria.orderType) {
      case "rankDown":
        setAlbumItems( _.reverse(searchResult) )
        break;
      case "releaseUp":
        setAlbumItems( _.sortBy(searchResult, [(tmp) => { return tmp['im:releaseDate'].label; }]) )
        break;
      case "releaseDown":
        setAlbumItems( _.reverse(_.sortBy(searchResult, [(tmp) => { return tmp['im:releaseDate'].label; }])) )
        break;
      case "nameUp":
        setAlbumItems( _.sortBy(searchResult, [(tmp) => { return tmp['im:name'].label; }]) )
        break;
      case "nameDown":
        setAlbumItems( _.reverse(_.sortBy(searchResult, [(tmp) => { return tmp['im:name'].label; }])) )
        break;
      default:
        setAlbumItems( searchResult )
    }

    setShowLoader(false)
  };

  const renderAlbums = () => {
    return albumItems.map((albumItem) => <AlbumCard albumItem={albumItem} key={albumItem.id.attributes['im:id']} />);
  }

  return (
    <Container className="albums-container">
      <Grid>
        <Grid.Column computer={4} tablet={6} mobile={16}>
          <OrderDropdown
            searchCriteria={searchCriteria}
            setSearchCriteria={setSearchCriteria}
          />
        </Grid.Column>
        <Grid.Column computer={12} tablet={10} mobile={16}>
          <SearchInput
            searchCriteria={searchCriteria}
            setSearchCriteria={setSearchCriteria}
          />
        </Grid.Column>
      </Grid>
      <Divider />
      {showLoader ? (
        <Dimmer active inverted>
          <Loader size="massive">Loading</Loader>
        </Dimmer>
      ) : (
        <FadeIn>
          <Card.Group centered itemPerRow={3}>
            {renderAlbums()}
          </Card.Group>
        </FadeIn>
      )}
    </Container>
  );
};

export default Albums;
