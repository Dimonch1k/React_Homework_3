import Translator from "./Translator";
import Ball from "./Ball.jsx";

import "../../styles/components/Magic-Ball/Magic-Ball.scss";

import { answerList } from "./answerList.js";

const MagicBall = () => {
  return (
    <div className="magic-ball">
      <Translator />
      <Ball answerList={answerList} />
    </div>
  );
};

export default MagicBall;
