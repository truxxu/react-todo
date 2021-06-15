import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare as uncheckedIcon } from "@fortawesome/free-regular-svg-icons";
import { faCheckSquare as checkedIcon } from "@fortawesome/free-solid-svg-icons";

const CheckBox = ({ checked }) => {
  if (checked) {
    return <FontAwesomeIcon icon={checkedIcon} />;
  }

  return <FontAwesomeIcon icon={uncheckedIcon} />;
};

export { CheckBox };
