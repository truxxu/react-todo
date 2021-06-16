import React, { useState } from "react";
import moment from "moment";

import "./Item.css";
import { CheckBox } from "../atoms";

const Item = ({ isComplete, description, dueDate, id }) => {
  const [isChecked, setIsChecked] = useState(isComplete);

  const parseDate = (date) => {
    if (date) {
      return <p className="item_date">{moment(date).format("MM/DD/YYYY")}</p>;
    }

    return;
  };

  const todoState = () => {
    // completed todos
    if (isChecked) {
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
        <CheckBox setIsChecked={setIsChecked} checked={isChecked} id={id} />
        <p className="item_infoTitle">{description}</p>
      </div>
      {parseDate(dueDate)}
    </div>
  );
};

export { Item };
