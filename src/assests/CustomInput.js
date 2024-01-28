import React from "react";

import classes from "./CustomInput.module.css"

const CustomInput = (props) => {
  return (
    <input
      id={props.id}
      name={props.name}
      type={props.type}
      placeholder={props.placeholder}
      className={`${classes[props.className]} ${classes["input"]}`}
    />
  );
};

export default CustomInput;
