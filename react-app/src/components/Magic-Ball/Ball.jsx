import { useState } from "react";
import { useTranslation } from "react-i18next";

import "../../styles/components/Magic-Ball/Ball.scss";

const Ball = () => {
  const [shakeBall, setShakeBall] = useState(false);
  const [answerIndex, setAnswerIndex] = useState(false);
  const { t } = useTranslation();
  const answers = t("answers", { returnObjects: true });

  const getRandomAnswer = () => {
    setAnswerIndex(Math.floor(Math.random() * answers.length));
  };

  return (
    <div className={shakeBall ? "ball shake-ball" : "ball"}>
      <button
        className="answer-btn"
        id="answer-btn"
        onClick={() => {
          setShakeBall(true);
          setTimeout(() => {
            setShakeBall(false);
            getRandomAnswer();
          }, 1000);
        }}
      >
        <p className="answer-text">{answers[answerIndex]}</p>
      </button>
    </div>
  );
};

export default Ball;
