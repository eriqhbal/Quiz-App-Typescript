import React from "react";

// import type
import { answerObject } from "../App";

// import styles
import { Wrapper, ButtonWrapper } from "./QuestionCard.styles";

type Props = {
  question: string;
  answers: Array<string>;
  callback(e: React.MouseEvent<HTMLButtonElement>): void;
  userAnswer: answerObject | any;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard = (props: Props) => {

  return (
    <Wrapper>
      <p className="number">
        Question: {props.questionNr} / {props.totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: props.question }} />
      <div>
        {props.answers?.map((answer) => {
          return (
            <ButtonWrapper key={answer} correct={props.userAnswer?.correctAnswer === answer} userClicked={props.userAnswer?.answer === answer}>
                <button disabled={!!props.userAnswer} value={answer} onClick={props.callback}>
                  <span dangerouslySetInnerHTML={{ __html: answer}}/>
                </button>
            </ButtonWrapper>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default QuestionCard;
