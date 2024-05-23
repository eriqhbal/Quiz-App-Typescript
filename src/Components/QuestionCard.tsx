import React, { useState } from "react";

// import type
import { answerObject } from "../App";

type Props = {
  question: string;
  answers: Array<string>;
  callback(e: React.MouseEvent<HTMLButtonElement>): void;
  userAnswer: Array<answerObject> | any;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard = (props: Props) => {

  return (
    <div>
      <p className="number">
        Question: {props.questionNr} / {props.totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: props.question }} />
      <div>
        {props.answers?.map((answer) => {
          return (
            <div key={answer}>
                <button disabled={props.userAnswer} value={answer} onClick={props.callback}>
                  <span dangerouslySetInnerHTML={{ __html: answer}}/>
                </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionCard;
