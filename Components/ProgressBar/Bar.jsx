import './Bar.css'
import { StyleSheet, Button, View, Text, Image, FlatList, Linking } from 'react-native';
import Slider from '@react-native-community/slider';
{/* eslint-disable react/prop-types */}

// SVG : https://docs.expo.dev/versions/latest/sdk/svg/
// slider : https://docs.expo.dev/versions/latest/sdk/slider/
export default function Bar(props){
    let durationInSec = Math.floor(props.mediaStatus?.mediaInfo.streamDuration);
    let durationInMin = Math.floor(durationInSec /60);
    console.log((Math.floor(props.streamPos) / durationInSec) * 100 );
    let barValue = props.mediaStatus ? (Math.floor(props.streamPos) / durationInSec) * 100 : 50;
    return (
        <>
        <View className={"timeStamp"}>
            <Text>
                    {(() => {
                        let timeInSec = props.streamPos;
                        let timeInSecNoDecimal = Math.floor(timeInSec)
                        let sec = (timeInSecNoDecimal) % 60 ;
                        let min = Math.floor(timeInSecNoDecimal / 60);



                        return `${min}:${sec < 10 ? "0" + sec : sec}`;
                    })()} / {props.mediaStatus?.mediaInfo.streamDuration
                    ? `${durationInMin}:${durationInSec % 60 < 10 ? "0" + (durationInSec % 60) : durationInSec % 60}`
                    : "N/A"}
            </Text>
        </View>


            <View className="slidecontainer">

                <Slider   style={{width: 300, height: 100}} lowerLimit={0} upperLimit={100} minimumValue={0} maximumValue={100} onSlidingComplete={ value => {props.changeTime?.(value) || props.keyDetection("slider")}} value={barValue}
                           minimumTrackTintColor={'#112233'}
                           maximumTrackTintColor={'#000000'} 
                           thumbTintColor={'#FFFFFF'} 
                    />
                {/* <input type="range" min="0" max="100" className={"slider"} onChange={props.timeValue}
                       onMouseUp={props.buttonAction} onKeyUp={props.buttonAction} onTouchEnd={props.buttonAction}
                       value={String(props.mediaValue)}/> */}
        </View>
        </>
    );
}