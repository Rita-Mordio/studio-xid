import React, { useState } from "react";
import { Container, Divider, Grid } from "semantic-ui-react";

import OrderDropdown from "../components/OrderDropdown";

const Album = () => {
  const [searchCriteria, setSearchCriteria] = useState({
    searchText: "",
    orderType: "",
  });

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
          <div>영역2</div>
        </Grid.Column>
      </Grid>
      <Divider />
      <div>영역3</div>
    </Container>
  );
};

export default Album;
