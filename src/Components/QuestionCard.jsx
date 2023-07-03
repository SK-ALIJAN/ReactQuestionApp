import { useState } from "react";
import Option from "./Option";
import Style from "./Design.module.css";

const QuestionCard = (props) => {
  let { correctOptionIndex, question } = props;
  let [hide, setHide] = useState(false);
  let [click, setClick] = useState(false);
  let handleClick = (index) => {
    setClick(true);
    if (correctOptionIndex == index) {
      props.scoreIncrese();
    }
  };
  return (
    <div className={Style.question_card}>
      <h3>
         {question}
      </h3>

      <div className={Style.options}>
        {props.options.map((ele, index) => {
          return (
            <Option
              key={ele}
              data={ele}
              index={index}
              ans={correctOptionIndex}
              handleClick={handleClick}
              click={click}
            />
          );
        })}
      </div>
      <div className={Style.show_ans}>
        <button
          onClick={() => {
            setHide(!hide);
          }}
        >
          {hide == false ? "Show Ans" : "Hide Ans"}
        </button>
        {hide ? <p className={Style.answer}>{props.options[correctOptionIndex]}</p> : ""}
      </div>
    </div>
  );
};

export default QuestionCard;
