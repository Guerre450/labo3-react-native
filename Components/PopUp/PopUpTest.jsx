import "./PopUp.css"
import "./PopUpTest.css"
import { useTranslation } from 'react-i18next';
import PopUp from "./PopUp"
import {postData} from "../../utilities/apiCall"
import questions from "../../../public/questions.json"
//source : https://blog.logrocket.com/creating-reusable-pop-up-modal-react/
import  { useRef, useEffect, useState } from 'react';
import QuestionTemplate from "./QuestionTemplate/QuestionTemplate";

const PopUpTest = ({ isOpen, onClose, clicksTracker,taskTest,timeList  }) => {
    const answerData = {
        "question1":0,
        "question2": 0,
        "question3": 0,
        "question4": 0,
        "question5": 0,
        "question6": 0
    }
    const [userAnswerData, setUserAnswerData] = useState(answerData)
    const {t, i18n} = useTranslation()
    const [testStatus, setTestStatus] = useState(false);
    function sendData(){
        postData(clicksTracker, "Clicks");
        postData(userAnswerData, "Feedback");
        postData(timeList,"Timers");
        setTestStatus(true);
    }

    function answerChanged(event){
        const id = parseInt(event.currentTarget.id) + 1;
        let value = event.currentTarget?.value
        if (value){
        setUserAnswerData(lastData =>{
            lastData["question" + (id)]  = value
        return lastData})
      }
        console.log(userAnswerData);

    }
    let questionsList = Object.values(questions);
    questionsList.shift()



  const content = () => {
    //taskTest != "cacabag"
    if (taskTest != "cacabag"){
      return (
        <h2>{taskTest}</h2>
      )
 
    }

    if (testStatus){
      return( <h1>Test complété</h1>)
     }

    return (
      <div className="popUpTestModal">
        <h2>{questions["Intro"]}</h2>
        {questionsList.map((item, key) => <QuestionTemplate question={item} callBackChange={answerChanged} valuable={answerData[key]} key={key} num={key}/> )}
        
        <button  onClick={sendData} >
        <h1>{t("send-button")}</h1>
        </button>
      </div>
    );
  }
  return (
    < PopUp isOpen={isOpen}
    onClose={onClose} content={content}/>
  );
};

export default PopUpTest