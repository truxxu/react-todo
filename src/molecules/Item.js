import React from "react";

import "./Item.css";
import { CheckBox } from "../atoms";

const Item = ({ isComplete, description, dueDate }) => {
  return (
    <div className="item_container">
      <div className="item_info">
        <CheckBox checked={isComplete} />
        <p className="item_infoTitle">{description}</p>
      </div>
      <p>{dueDate}</p>
    </div>
  );
};

export { Item };
