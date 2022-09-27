import React from "react";
import cl from "./input.module.scss";

const Input = ({height="60px",width="482px"}) => {
  return (
    <input
      type="text"
      placeholder=""
      className={cl.input}
      style={{ height: `${height}`, width: `${width}` }}
    />
  );
};

export default Input;
