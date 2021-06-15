import React from "react";
import moment from "moment";

import "./Item.css";
import { CheckBox } from "../atoms";

const Item = ({ isComplete, description, dueDate }) => {
  const parseDate = (date) => {
    if (date) {
      return <p className="item_date">{moment(date).format("MM/DD/YYYY")}</p>;
    }

    return;
  };

  const todoState = () => {
    // completed todos
    if (isComplete) {
      return "lightgreen";
      //overdue todos
    } else if (moment(dueDate) < moment()) {
      return "red";
    }
    //uncomplete with no due date
    return "lightgray";
  };

  return (
    <div className="item_container" style={{ backgroundColor: todoState() }}>
      <div className="item_info">
        <CheckBox checked={isComplete} />
        <p className="item_infoTitle">{description}</p>
      </div>
      {parseDate(dueDate)}
    </div>
  );
};

export { Item };
