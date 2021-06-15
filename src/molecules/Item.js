import React from "react";

const Item = ({ isComplete, description, dueDate }) => {
  return (
    <div className="item_container">
      <p>{description}</p>
    </div>
  );
};

export { Item };
