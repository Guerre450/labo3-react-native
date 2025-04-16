import { useState, useEffect, useMemo } from "react";
import test from "../tests/test.json"
const useTutorial = (logButtonAction) => {
  let times = {
    "task0" : 0,
    "task1" : 0,
    "task2" : 0,
    "task3" : 0,
    "task4" : 0,
    "task5" : 0,
    "task6" : 0,
    "task7" : 0,
    "task8" : 0,
    "task9" : 0,
    "task10" : 0,
  }
  const [data, setData] = useState(0);
  const [text, setText] = useState("");
  const [lastTime, setLastTime] = useState(Date.now());
  const [timeList,setTimeList] = useState(times);
  //const [currentStep, setStep] = useState(steps);
  function saveTime(index){
      setTimeList((prevTimeList) => {
        let newTime = Date.now() - lastTime
        let title = "task" + index;
        prevTimeList[title] = newTime
        return prevTimeList;
      })
      setLastTime(Date.now())
  }
  let keyDetection  = (name) =>{
    console.log(name);
    console.log(data);
    logButtonAction(name);
    
    setData((prevData) => {
      if (prevData in test){
        if (test[prevData]["task"] == name){
          saveTime(prevData)
          return prevData + 1
          
        }
      }
      
      return prevData
    
    });

  }

  useEffect(() => { // called upon loaded data changed
    console.log(data)
    console.log(timeList)
    if (data in test){
    setText(test[data]["text"]);
    console.log(test[data]["text"]);
    }
    else{
        setText("cacabag")
    }
}, [data])

  let sessionDetection = () =>{
    console.log("session Started")
  }

  return [text,keyDetection, sessionDetection, timeList];
};

export default useTutorial;