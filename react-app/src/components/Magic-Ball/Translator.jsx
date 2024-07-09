import { useTranslation } from "react-i18next";
import { Button } from "react-bootstrap";

import "../../styles/components/Magic-Ball/Translator.scss";

const Translator = () => {
  const { i18n } = useTranslation("global");
  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="translator">
      <Button
        className="translator__btn "
        onClick={() => handleChangeLanguage("en")}
      >
        En
      </Button>
      <Button
        className="translator__btn"
        onClick={() => handleChangeLanguage("ua")}
      >
        Ua
      </Button>
    </div>
  );
};

export default Translator;
