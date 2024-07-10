import { useState } from "react";
import { useTranslation } from "react-i18next";

import "../../styles/components/Magic-Ball/Ball.scss";
import { changeAnswer } from "../../i18n";

const Ball = () => {
  const [shakeBall, setShakeBall] = useState(false);
  const [answerText, setAnswerText] = useState(false);
  const { t } = useTranslation();

  return (
    <div className={shakeBall ? "ball shake-ball" : "ball"}>
      <button
        className="answer-btn"
        id="answer-btn"
        onClick={() => {
          setAnswerText(false);
          setShakeBall(true);
          setTimeout(() => {
            setShakeBall(false);
            setAnswerText(true);
          }, 1000);
          changeAnswer();
        }}
      >
        <p className="answer-text">{answerText && t("answer")}</p>
      </button>
    </div>
  );
};

export default Ball;
