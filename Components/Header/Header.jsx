import { StyleSheet, Button, View, Image, FlatList, Linking, Pressable } from 'react-native';
import Svg, { Circle, Rect, Path } from 'react-native-svg';
import {useEffect} from "react";
import {useRef} from "react";

export default function Header(props){

    const styles = StyleSheet.create({
        header : {
            flexDirection: "row",
            justifyContent: "space-between",
            height : "80px",
            width : "100%",
        },
        
        CC  : {
            display: "flex" , 
            alignItems: "center",
            justifyContent: "center",
            width: "80px",
        },

        infoButton : {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "80px",
        },
        broadcast : {
            height: "100%",
            width: "80px",
            borderRadius: "1%",
            display: "flex",
            
        },
        
        // CC : hover {
        //     backgroundColor: #222222,
        //     height: "100%",
        //     display: "flex",
        //     alignItems : center,
        //     justifyContent : center,
        //     width: "80px",
        // }
        // .infoButton:hover{
        //     background-color: #222222;
        //     height: 100%;
        //     display:flex;
        //     align-items:center;
        //     justify-content:center;
        //     width: 80px;
        // }
        // .broadcast:hover{
        //     background-color: #222222;
        //     height: 100%;
        //     width: 80px;
        //     border-radius: 1%;
        // }
        
        
        // .CC:active{
        //     background-color: #323232;
        //     height: 100%;
        //     display:flex;
        //     align-items:center;
        //     justify-content:center;
        //     width: 80px;
        // }
        // infoButton:active{
        //     background-color: #323232;
        //     height: 100%;
        //     display:flex;
        //     align-items:center;
        //     justify-content:center;
        //     width: 80px;
        // }
        // broadcast:active{
        //     background-color: #323232;
        //     height: 100%;
        //     width: 80px;
        //     border-radius: 1%;
        // }
        
        
        
        
    })

    const refKey = useRef();
    // useEffect(() => {
    //     const button = refKey.current;
    //     button.addEventListener("click", props.buttonAction);
    //     button.addEventListener("click", props.infoAction);

    //     return () => {
    //         button.removeEventListener("click", props.buttonAction);
    //         button.removeEventListener("click", props.infoAction);
    //     };
    // }, []);
    
    const refKey2 = useRef();
    // useEffect(() => {
    //     const button = refKey2.current;
    //     button.addEventListener("click", props.buttonAction);
    //     button.addEventListener("click", props.castAction);

    //     return () => {
    //         button.removeEventListener("click", props.buttonAction);
    //         button.removeEventListener("click", props.castAction);
    //     };
    // }, []);

    return (
        <>
        <View className={"header"} style={styles.header}>
            {/* eslint-disable-next-line react/prop-types */}
            <Pressable title="CC" style={styles.CC} onPress={() => {props.buttonAction}}  >
            <Svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Circle cx="28.5" cy="28.5" r="28.5" fill="white"/>
                <Path d="M27.2273 25.4545H20.8182C20.7727 24.9242 20.6515 24.4432 20.4545 24.0114C20.2652 23.5795 20 23.2083 19.6591 22.8977C19.3258 22.5795 18.9205 22.3371 18.4432 22.1705C17.9659 21.9962 17.4242 21.9091 16.8182 21.9091C15.7576 21.9091 14.8598 22.1667 14.125 22.6818C13.3977 23.197 12.8447 23.9356 12.4659 24.8977C12.0947 25.8598 11.9091 27.0152 11.9091 28.3636C11.9091 29.7879 12.0985 30.9811 12.4773 31.9432C12.8636 32.8977 13.4205 33.6174 14.1477 34.1023C14.875 34.5795 15.75 34.8182 16.7727 34.8182C17.3561 34.8182 17.8788 34.7462 18.3409 34.6023C18.803 34.4508 19.2045 34.2348 19.5455 33.9545C19.8864 33.6742 20.1629 33.3371 20.375 32.9432C20.5947 32.5417 20.7424 32.0909 20.8182 31.5909L27.2273 31.6364C27.1515 32.6212 26.875 33.625 26.3977 34.6477C25.9205 35.6629 25.2424 36.6023 24.3636 37.4659C23.4924 38.322 22.4129 39.0114 21.125 39.5341C19.8371 40.0568 18.3409 40.3182 16.6364 40.3182C14.5 40.3182 12.5833 39.8598 10.8864 38.9432C9.19697 38.0265 7.85985 36.678 6.875 34.8977C5.89773 33.1174 5.40909 30.9394 5.40909 28.3636C5.40909 25.7727 5.90909 23.5909 6.90909 21.8182C7.90909 20.0379 9.25758 18.6932 10.9545 17.7841C12.6515 16.8674 14.5455 16.4091 16.6364 16.4091C18.1061 16.4091 19.4583 16.6098 20.6932 17.0114C21.928 17.4129 23.0114 18 23.9432 18.7727C24.875 19.5379 25.625 20.4811 26.1932 21.6023C26.7614 22.7235 27.1061 24.0076 27.2273 25.4545ZM51.821 25.4545H45.4119C45.3665 24.9242 45.2453 24.4432 45.0483 24.0114C44.8589 23.5795 44.5938 23.2083 44.2528 22.8977C43.9195 22.5795 43.5142 22.3371 43.0369 22.1705C42.5597 21.9962 42.018 21.9091 41.4119 21.9091C40.3513 21.9091 39.4536 22.1667 38.7188 22.6818C37.9915 23.197 37.4384 23.9356 37.0597 24.8977C36.6884 25.8598 36.5028 27.0152 36.5028 28.3636C36.5028 29.7879 36.6922 30.9811 37.071 31.9432C37.4574 32.8977 38.0142 33.6174 38.7415 34.1023C39.4688 34.5795 40.3438 34.8182 41.3665 34.8182C41.9498 34.8182 42.4725 34.7462 42.9347 34.6023C43.3968 34.4508 43.7983 34.2348 44.1392 33.9545C44.4801 33.6742 44.7566 33.3371 44.9688 32.9432C45.1884 32.5417 45.3362 32.0909 45.4119 31.5909L51.821 31.6364C51.7453 32.6212 51.4688 33.625 50.9915 34.6477C50.5142 35.6629 49.8362 36.6023 48.9574 37.4659C48.0862 38.322 47.0066 39.0114 45.7188 39.5341C44.4309 40.0568 42.9347 40.3182 41.2301 40.3182C39.0938 40.3182 37.1771 39.8598 35.4801 38.9432C33.7907 38.0265 32.4536 36.678 31.4688 34.8977C30.4915 33.1174 30.0028 30.9394 30.0028 28.3636C30.0028 25.7727 30.5028 23.5909 31.5028 21.8182C32.5028 20.0379 33.8513 18.6932 35.5483 17.7841C37.2453 16.8674 39.1392 16.4091 41.2301 16.4091C42.6998 16.4091 44.0521 16.6098 45.2869 17.0114C46.5218 17.4129 47.6051 18 48.5369 18.7727C49.4688 19.5379 50.2188 20.4811 50.7869 21.6023C51.3551 22.7235 51.6998 24.0076 51.821 25.4545Z" fill="#070000"/>
            </Svg>
            </Pressable>

            <Pressable  ref={refKey} style={styles.infoButton} title="infoButton" onPress={() => {props.buttonAction; props.buttonAction}}>
                <Svg width="70" height="70" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M29.5 0.333332C45.6087 0.333332 58.6666 13.3942 58.6666 29.5C58.6666 45.6058 45.6087 58.6667 29.5 58.6667C13.3912 58.6667 0.333313 45.6058 0.333313 29.5C0.333313 13.3942 13.3912 0.333332 29.5 0.333332ZM29.5 5.19542C16.0979 5.19542 5.1954 16.0979 5.1954 29.5C5.1954 42.9021 16.0979 53.8046 29.5 53.8046C42.9021 53.8046 53.8046 42.9021 53.8046 29.5C53.8046 16.0979 42.9021 5.19542 29.5 5.19542ZM29.5 39.7083C31.1109 39.7083 32.4166 41.0141 32.4166 42.625C32.4166 44.2359 31.1109 45.5417 29.5 45.5417C27.8891 45.5417 26.5833 44.2359 26.5833 42.625C26.5833 41.0141 27.8891 39.7083 29.5 39.7083ZM29.5 14.1875C33.9298 14.1875 37.5208 17.7786 37.5208 22.2083C37.5208 25.1565 36.6531 26.7992 34.4551 29.0876L33.9634 29.5884C32.1495 31.4022 31.6875 32.1725 31.6875 33.875C31.6875 35.0831 30.7081 36.0625 29.5 36.0625C28.2919 36.0625 27.3125 35.0831 27.3125 33.875C27.3125 30.9268 28.1802 29.2842 30.3782 26.9957L30.8699 26.495C32.6838 24.6811 33.1458 23.9108 33.1458 22.2083C33.1458 20.1948 31.5136 18.5625 29.5 18.5625C27.6123 18.5625 26.0598 19.9971 25.8731 21.8356L25.8541 22.2083C25.8541 23.4164 24.8747 24.3958 23.6666 24.3958C22.4585 24.3958 21.4791 23.4164 21.4791 22.2083C21.4791 17.7786 25.0701 14.1875 29.5 14.1875Z" fill="white"/>
                </Svg>
            </Pressable>
            {/* <Button title="testButton" style={styles.testButton} onPress={() =>{props.testAction}}>
                <svg width="70" height="70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 11V16M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21ZM12.0498 8V8.1L11.9502 8.1002V8H12.0498Z"
                        stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

            </Button> */}
            {/* eslint-disable-next-line react/prop-types */}
            <Pressable ref={refKey2} title="loadMedia" style={styles.broadcast} onPress={() => {props.startVideo()}} >
                <Svg width="80" height="81" viewBox="0 0 80 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path
                        d="M6.66663 54.1667C9.8696 54.8199 12.8098 56.4006 15.1212 58.7121C17.4327 61.0235 19.0134 63.9637 19.6666 67.1667M6.66663 40.6667C13.4359 41.4195 19.7475 44.4535 24.5637 49.2696C29.3798 54.0857 32.4137 60.3974 33.1666 67.1667M6.66663 27.1667V20.5C6.66663 18.7319 7.369 17.0362 8.61925 15.786C9.86949 14.5357 11.5652 13.8333 13.3333 13.8333H66.6666C68.4347 13.8333 70.1304 14.5357 71.3807 15.786C72.6309 17.0362 73.3333 18.7319 73.3333 20.5V60.5C73.3333 62.2681 72.6309 63.9638 71.3807 65.214C70.1304 66.4643 68.4347 67.1667 66.6666 67.1667H46.6666M6.66663 67.1667H6.69996" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </Svg>

            </Pressable>
        </View>
      </>
    )
}