import { useState, useEffect } from "react";
let buttonClicks = {
  "backward":0,
  "forward":0,
  "high":0,
  "low":0,
  "next":0,
  "play/pause":0,
  "previous":0,
  "slider":0,
  "infoButton":0,
  "broadcast":0,
  "mute":0

}
const useClickTracker = () => {
  const [clicksTracker, setClickTracker] = useState(buttonClicks);
  //called by mediaButtonActions function
  function logButtonAction(name){
        if (name in clicksTracker){
            setClickTracker(lastClickTracker =>{
            lastClickTracker[name] += 1
            return lastClickTracker})
        }
        console.log(clicksTracker)
    }

  return [clicksTracker,logButtonAction];
};

export default useClickTracker;

