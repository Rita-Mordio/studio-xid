import React from "react";
import { Card, Image } from "semantic-ui-react";
const AlbumCard = ({ albumItem, history }) => {
  const onclick = () => {
    window.sessionStorage.setItem("albumItem", JSON.stringify(albumItem));
    history.push("/album");
  };

  return (
    <Card onClick={onclick}>
      <Image src={albumItem["im:image"][2].label} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{albumItem["im:name"].label}</Card.Header>
        <Card.Meta>
          <span className="date">
            {albumItem["im:releaseDate"]["attributes"].label}
          </span>
        </Card.Meta>
      </Card.Content>
    </Card>
  );
};

export default AlbumCard;
