import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare as uncheckedIcon } from "@fortawesome/free-regular-svg-icons";
import { faCheckSquare as checkedIcon } from "@fortawesome/free-solid-svg-icons";

import updateItems from "../hooks/getItems";

const CheckBox = ({ checked, setIsChecked, id }) => {
  const [updateItem, isLoading] = updateItems();

  const onClickHandler = (e) => {
    if (!checked) {
      updateItem(`PATCH/${id}`, { isComplete: !checked });
      setIsChecked(!checked);
    }
  };

  return (
    <FontAwesomeIcon
      icon={checked ? checkedIcon : uncheckedIcon}
      onClick={onClickHandler}
    />
  );
};

export { CheckBox };
