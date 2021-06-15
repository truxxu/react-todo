import React from "react";
import moment from "moment";

import "./list.css";
import { Item } from "../molecules";

const List = ({ listData }) => {
  const sortByDate = (items) => {
    return items
      .sort((firstItem, secondItem) => firstItem.dueDate - secondItem.dueDate)
      .reverse();
  };

  const sortItems = (data) => {
    const completedItems = data.filter((item) => item.isComplete);

    const overdueItems = sortByDate(
      data.filter((item) => !item.isComplete && moment(item.dueDate) < moment())
    );

    const todoItems = sortByDate(
      data.filter((item) => !item.isComplete && moment(item.dueDate) > moment())
    );

    const noDueDateItems = data.filter(
      (item) => !item.dueDate && !item.isComplete
    );

    return overdueItems.concat(todoItems, noDueDateItems, completedItems);
  };

  const renderList = () => {
    return sortItems(listData).map((todo) => <Item key={todo.id} {...todo} />);
  };

  return (
    <div className="list_container">
      <div className="list_containerInner">{renderList()}</div>;
    </div>
  );
};

export { List };
