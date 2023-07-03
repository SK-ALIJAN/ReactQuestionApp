import { useState } from "react";
import QuestionCard from "./QuestionCard";
import Style from "./Design.module.css";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { RiEmotionNormalLine, RiEmotionHappyLine } from "react-icons/ri";
const Booklet = () => {
  let [start, setStart] = useState(false);
  const [data, setData] = useState([]);
  let [score, setScore] = useState(0);
  let [modal, setModal] = useState(false);

  let handleClick = () => {
    setStart(true);
    Api_Coll();
  };

  let scoreIncrese = () => {
    setScore((prev) => {
      return prev + 1;
    });
  };
  let Api_Coll = async () => {
    try {
      let url = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-quiz`;
      let res = await fetch(url);
      let data = await res.json();
      setData(data.data);
      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div data-testid="Booklet">
      {start == false ? (
        <div className={Style.welcome_div}>
          <h1>To begin the exam, click on the 'Start Exam' button below</h1>
          <button onClick={handleClick}>Start Exam</button>
        </div>
      ) : (
        ""
      )}

      {start ? (
        <div className={Style.questions_container}>
          <div>
            <h3>Score: {score} /10</h3>
            <p
              className={Style.emotion}
              style={
                score < 3
                  ? { backgroundColor: "white" }
                  : score >= 3 && score <= 6
                  ? { backgroundColor: "green", color: "white" }
                  : { backgroundColor: "teal", color: "white" }
              }
            >
              Performance :
              {score < 3 ? (
                <RiEmotionNormalLine className={Style.emo1} />
              ) : score > 3 && score <= 6 ? (
                <RiEmotionHappyLine className={Style.emo2} />
              ) : (
                <MdOutlineEmojiEmotions className={Style.emo3} />
              )}
            </p>
            <button
              onClick={() => {
                setModal(true);
              }}
            >
              End Exam
            </button>{" "}
          </div>

          <div>
            {data.map((ele) => {
              return (
                <QuestionCard
                  key={ele.id}
                  {...ele}
                  scoreIncrese={scoreIncrese}
                />
              );
            })}{" "}
          </div>
        </div>
      ) : (
        ""
      )}
      {modal ? (
        <div className={Style.modal}>
          <p>are you really want to end this exam ?</p>
          <p>Your Score is {score}</p>
          <button
            onClick={() => {
              setStart(false);
              setScore(0);
              setModal(false);
            }}
          >
            Yes
          </button>
          <button
            onClick={() => {
              setModal(false);
            }}
          >
            Cancel
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Booklet;
