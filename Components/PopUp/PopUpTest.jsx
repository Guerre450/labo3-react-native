import "./PopUp.css"
import "./PopUpTest.css"
import PopUp from "./PopUp"
import {postData} from "../../utilities/apiCall"
import questions from "../../tests/questions.json"
//source : https://blog.logrocket.com/creating-reusable-pop-up-modal-react/
import  { useRef, useEffect, useState } from 'react';
import QuestionTemplate from "./QuestionTemplate/QuestionTemplate";
import { Pressable, View,Text } from "react-native";

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
    const [testStatus, setTestStatus] = useState(false);
    function sendData(){
        postData(clicksTracker, "Clicks");
        postData(userAnswerData, "Feedback");
        postData(timeList,"Timers");
        setTestStatus(true);
    }

    function answerChanged(num, value){
        const id = parseInt(num) + 1;
        console.log(value)
        if (value){
        setUserAnswerData(lastData =>{
            lastData["question" + (id)]  = parseInt(value);
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
        <Text>{taskTest}</Text>
      )
 
    }

    if (testStatus){
      return( <Text>Test complété</Text>)
     }

    return (
      <View className="popUpTestModal">
        <Text>{questions["Intro"]}</Text>
        {questionsList.map((item, key) => <QuestionTemplate question={item} callBackChange={answerChanged} valuable={answerData[key]} key={key} num={key}/> )}
        
        <Pressable  onPress={()=>{sendData()}} >
        <Text>{"Send"}</Text>
        </Pressable>
      </View>
    );
  }
  return (
    < PopUp isOpen={isOpen}
    onClose={onClose} content={content}/>
  );
};

export default PopUpTest