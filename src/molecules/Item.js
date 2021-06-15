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

  return (
    <div className="item_container">
      <div className="item_info">
        <CheckBox checked={isComplete} />
        <p className="item_infoTitle">{description}</p>
      </div>
      {parseDate(dueDate)}
    </div>
  );
};

export { Item };
