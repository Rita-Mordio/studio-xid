import React from "react";
import { Message } from "semantic-ui-react";

const EmptyMessage = () => {
  return (
    <div className="empty-message">
      <Message warning>
        <Message.Header>
          검색 결과가 없어요. 다른 검색어를 입력해주세요.
        </Message.Header>
      </Message>
    </div>
  );
};

export default EmptyMessage;
