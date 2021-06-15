import React from "react";

import "./list.css";
import { Item } from "../molecules";

const List = ({ listData }) => {
  const renderList = () => {
    return listData.map((todo) => <Item key={todo.id} {...todo} />);
  };

  return (
    <div className="list_container">
      <div className="list_containerInner">{renderList()}</div>;
    </div>
  );
};

export { List };
