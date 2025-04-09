// import "./PopUp"
// import "./PopUpInfo"
import { useTranslation } from 'react-i18next';
import PopUp from "./PopUp"

//source : https://blog.logrocket.com/creating-reusable-pop-up-modal-react/
import  { useRef, useEffect } from 'react';

const PopUpInfo = ({ isOpen, onClose, buttonAction }) => {
  const {t, i18n} = useTranslation()

  const handleLanguageChange = (event) =>
  {
    const  {value} = event.target
    i18n.changeLanguage(value);
    buttonAction(event);

  }
  
  const content = () => {
    return (
      <div>
      <h1>{t("instruction-title")}</h1>
      <p>{t("cc-desc")}</p>
      <p>{t("broadcast-desc")}</p>
      <p>{t("control-desc")}</p>
      <p>{t("volume-desc")}</p>
      <p>{t("progress-desc")}</p>
      <p>{t("media-desc")}</p>
      <div className="language-container">
      <button className="english" value={"en-us"} onClick={handleLanguageChange}>English</button>
      <button  className="french" value={"fr"} onClick={handleLanguageChange}>Français</button>
      <button  className="japanese" value={"ja"} onClick={handleLanguageChange}>日本語</button>
      </div>
      </div>
    );
  }
  return (
    < PopUp isOpen={isOpen}
    onClose={onClose} content={content}/>
  );
};

export default PopUpInfo