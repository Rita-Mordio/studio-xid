// 앨범 리스트 페이지

import React, { useState, useEffect } from "react";
import { Card, Container, Divider, Grid } from "semantic-ui-react";
import FadeIn from "react-fade-in";
import axios from "axios";
import _ from "lodash";

import SearchInput from "../components/SearchInput";
import OrderDropdown from "../components/OrderDropdown";
import AlbumCard from "../components/AlbumCard";
import DataLoader from "../components/DataLoader";
import EmptyMessage from "../components/EmptyMessage";

const Albums = ({ history }) => {
  const [showLoader, setShowLoader] = useState(false);        //로더 표시 유무 관리
  const [albumItems, setAlbumItems] = useState([]);           //API에서 가져온 데이터를 정럴 후 최종적으로 저장
  const [searchCriteria, setSearchCriteria] = useState({      //검색 조건을 조전
    searchText: "",
    orderType: "",
  });

  useEffect(() => {
    sortAlbumItem();
  }, [searchCriteria]);

  const getAlbums = () => {
    setShowLoader(true);
    return axios.get("https://itunes.apple.com/us/rss/topalbums/limit=100/json");
  };

  //API에서 가져온 데이터를 검색 및 정렬조건에 맞게 가공
  const sortAlbumItem = async () => {
    const albumItems = await getAlbums();

    //검색 내용과 일치하는 내용만 간추림
    const searchResult = _.filter(albumItems.data.feed.entry, (item) => {
      return (
        item["im:name"].label
          .toLowerCase()
          .indexOf(searchCriteria.searchText) !== -1
      );
    });

    //정렬 방식과 일치하는 형태로 변경
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
    if (albumItems.length === 0) return <EmptyMessage />;
    return albumItems.map((albumItem) => (
      <AlbumCard history={history} albumItem={albumItem} key={albumItem.id.attributes["im:id"]} />
    ));
  };

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
        <DataLoader />
      ) : (
        <FadeIn>
          <Card.Group centered>
            {renderAlbums()}
          </Card.Group>
        </FadeIn>
      )}
    </Container>
  );
};

export default Albums;
