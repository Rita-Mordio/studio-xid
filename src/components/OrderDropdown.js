// 정렬 Dropdown

import React from "react";
import { Dropdown } from "semantic-ui-react";
import OrderByOption from "../orderBySetting";

const OrderDropdown = ({ searchCriteria, setSearchCriteria }) => {

  const handleDropdownChange = (event, { value }) => {
    setSearchCriteria({
      ...searchCriteria,
      orderType: value,
    });
  };

  return (
    <Dropdown
      search
      selection
      placeholder="State"
      className="order-dropdown"
      options={OrderByOption}
      defaultValue={ searchCriteria.orderType === "" ? OrderByOption[0].value : searchCriteria.orderType}
      onChange={handleDropdownChange}
    />
  );
};

export default OrderDropdown;
