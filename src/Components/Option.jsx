import { useState } from "react";
import Style from "./Design.module.css";
const Option = (props) => {
  return (
    <div data-testid="option" className={Style.Option}>
      <button
        onClick={() => {
          props.handleClick(props.index);
        }}
        style={
          props.click
            ? {
                backgroundColor:
                  props.click && props.index == props.ans ? "green" : "red",
              }
            : {}
        }
        className={
          props.click ? (props.index == props.ans ? "bgGreen" : "bgRed") : ""
        }
        disabled={props.click ? true : false}
      >
        {props.data}
      </button>
    </div>
  );
};

export default Option;
