import { Button, Modal, Pressable, View } from "react-native";
import "./PopUp.css"

//source : https://blog.logrocket.com/creating-reusable-pop-up-modal-react/
import  { useRef, useEffect } from 'react';
import Svg, { Path } from "react-native-svg";

const PopUp = ({ isOpen, hasCloseBtn = true, onClose, content}) => {
  
  const handleCloseModal = () => {
    if (onClose != null) {
      onClose();
    }
  };

  return (
    <Modal  visible={isOpen}>
      {hasCloseBtn && (
        <View className="modal-container">
        <View className="button-container">
          <Pressable className="modal-close-btn" onPress={()=>{handleCloseModal()}}>
              <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001" stroke="black" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"/>
              </Svg>
        </Pressable>
        </View>
            {content()}
        </View>

      )}
    </Modal>
  );
};

export default PopUp