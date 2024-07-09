import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { Button } from "react-bootstrap";

import "../../styles/components/Magic-Ball/Ball.scss";

const Ball = () => {
  const [shakeBall, setShakeBall] = useState(false);
  const { t } = useTranslation();

  return (
    <div className={shakeBall ? "ball shake-ball" : "ball"}>
      <Button
        className="answer-btn"
        onClick={() => {
          setShakeBall(true);
          setTimeout(() => setShakeBall(false), 1000);
        }}
      >
        <p className="answer-text">{t("answer")}</p>
      </Button>
    </div>
  );
};

export default Ball;
