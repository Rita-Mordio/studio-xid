import React from "react";
import { Table, Container, Image, Icon, Button } from "semantic-ui-react";

import FadeIn from "react-fade-in";

const Album = ({ history }) => {
  const albumItem = JSON.parse(window.sessionStorage.getItem("albumItem"));

  const onClick = () => {
    history.push("/");
  };

  return (
    <Container className="album-container">
      <FadeIn>
        <div>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan="3">앨범 상세정보</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell textAlign="center" colSpan="2">
                  <Image
                    className="detail-image"
                    src={albumItem["im:image"][2].label}
                    size="medium"
                    rounded
                  />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>제목</Table.Cell>
                <Table.Cell>{albumItem["im:name"].label}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>아티스트</Table.Cell>
                <Table.Cell>{albumItem["im:artist"].label}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>카테고리</Table.Cell>
                <Table.Cell>{albumItem.category.attributes.label}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>가격</Table.Cell>
                <Table.Cell>{albumItem["im:price"].label}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>발매일</Table.Cell>
                <Table.Cell>
                  {albumItem["im:releaseDate"]["attributes"].label}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>권리</Table.Cell>
                <Table.Cell>{albumItem.rights.label}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Button
            floated="right"
            icon
            labelPosition="left"
            onClick={onClick}
          >
            <Icon name="left arrow" />
            이전 화면으로
          </Button>
        </div>
      </FadeIn>
    </Container>
  );
};

export default Album;
