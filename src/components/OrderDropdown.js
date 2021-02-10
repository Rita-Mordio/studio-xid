import React from "react";
import { Dropdown } from "semantic-ui-react";

const OrderDropdown = ({ searchCriteria, setSearchCriteria }) => {
  const handleDropdownChange = (event, { value }) => {
    setSearchCriteria({
      ...searchCriteria,
      orderType: value,
    });
  };

  const OrderByOption = [
    {
      key: "1",
      text: "릴리즈 일자 ▲",
      value: "releaseUp",
    },
    {
      key: "2",
      text: "릴리즈 일자 ▼",
      value: "releaseDown",
    },
    {
      key: "3",
      text: "이름 ▲",
      value: "nameUp",
    },
    {
      key: "4",
      text: "이름 ▼",
      value: "nameDown",
    },
    {
      key: "5",
      text: "순위 ▲",
      value: "rankUp",
    },
    {
      key: "6",
      text: "순위 ▼",
      value: "rankDown",
    },
  ];

  return (
    <Dropdown
      search
      selection
      placeholder="State"
      className="order-dropdown"
      options={OrderByOption}
      defaultValue={OrderByOption[0].value}
      onChange={handleDropdownChange}
    />
  );
};

export default OrderDropdown;
