import "./MediaBar.css"
import { StyleSheet, Pressable, View, Image, FlatList, Linking } from 'react-native';
import Svg, { Circle, Rect, Path } from 'react-native-svg';
function MediaBar(props){
    const styles = StyleSheet.create(
        {mediaBar : {
            backgroundColor: "#D9D9D9",
            width: "90%",
            display:"flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            alignContent: "center",
            borderRadius: 20,
            height : "90px",
        
        }
        // .mediaBar > Pressable {
        //     background: none;
        //     border-radius: 100%;
        //     outline:none ;
        //     border-style: none;
        // }
        
        
        // .mediaBar > Pressable:hover{
        //     background: rgba(128, 128, 128, 0.43);
        //     border-width: 0;
        // }
        // .mediaBar > Pressable:active{
        //     background: rgba(128, 128, 128, 1);
        //     border-width: 0;
        //     box-shadow: #323232 5px 5px 5px 1px;
        // }
        
        // @media screen and (max-width: 450px) {
        
        //     .mediaBar{
        //         width: 95%;
        //     }
        //     .mediaBar > Pressable > Svg{
        //         width: 25px;
        //         height: 25px;
        //     }
    })
    



    let isPlaying = props.mediaStatus?.playerState == "playing";
    console.log(isPlaying);
    return(
        <View className={"mediaBar"} style={styles.mediaBar}>
            <Pressable title="previous" onPress={() => {props.prev()}}>
                <Svg width="40" height="40" viewBox="0 0 35 45" fill="none" xmlns="http://www.w3.org/2000/Svg">
                    <Path
                        d="M1.45833 43.2083L1.45833 1.79164M34 26.7266V18.2736C34 12.8685 34 10.1657 32.8653 8.60836C31.8757 7.25012 30.3561 6.37812 28.6842 6.20769C26.7673 6.01229 24.4318 7.37416 19.763 10.0976L12.5176 14.3241L12.4925 14.3386C7.90268 17.016 5.60619 18.3557 4.83236 20.1021C4.15607 21.6284 4.15605 23.3692 4.83235 24.8955C5.60758 26.6451 7.9111 27.9888 12.5176 30.6759L19.763 34.9024C24.4317 37.6259 26.7673 38.9882 28.6842 38.7928C30.3561 38.6224 31.8757 37.7485 32.8653 36.3903C34 34.833 34 32.1316 34 26.7266Z"
                        stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </Svg>
            </Pressable>

            <Pressable title="backward" onPress={() => {props.seekTimeVideo(-10)}}>
                <Svg width="40" height="40" viewBox="0 0 47 37" fill="none" xmlns="http://www.w3.org/2000/Svg">
                    <Path
                        d="M11 21L1 11M1 11L11 1M1 11H33.5C40.4036 11 46 16.5964 46 23.5C46 30.4036 40.4036 36 33.5 36H21"
                        stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </Svg>
            </Pressable>
            <Pressable title="play/pause" onPress={() => {props.changePlayState()}}>
                {!isPlaying ?
                <Svg width="40" height="40" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/Svg">
                    <Path
                        d="M1 39.8724V7.13015C1 4.43024 1 3.0788 1.60032 2.27997C2.12426 1.58276 2.93185 1.125 3.82842 1.01556C4.8553 0.890207 6.11476 1.52593 8.63008 2.79556L41.0635 19.1667L41.0752 19.1716C43.855 20.5747 45.2455 21.2766 45.7016 22.2121C46.0995 23.0281 46.0995 23.9702 45.7016 24.7862C45.2448 25.7231 43.851 26.4278 41.0635 27.8348L8.63008 44.206C6.11296 45.4765 4.85567 46.1098 3.82842 45.9844C2.93185 45.8749 2.12426 45.4173 1.60032 44.7201C1 43.9212 1 42.5723 1 39.8724Z"
                        stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </Svg>
                
                :
                <Svg width="40" height="45" viewBox="0 0 40 45" fill="none" xmlns="http://www.w3.org/2000/Svg">
                   <Path
                        d="M27.125 7.06207V37.9371C27.125 39.0406 27.125 39.5924 27.2163 40.0513C27.5911 41.9355 29.063 43.4093 30.9473 43.7841C31.4061 43.8754 31.9579 43.8754 33.0614 43.8754C34.165 43.8754 34.7189 43.8754 35.1777 43.7841C37.062 43.4093 38.5347 41.9355 38.9095 40.0513C39 39.5965 39 39.0503 39 37.9661V7.03302C39 5.94879 39 5.40164 38.9095 4.94684C38.5347 3.06256 37.061 1.59065 35.1767 1.21584C34.7178 1.12457 34.1661 1.12457 33.0625 1.12457C31.9589 1.12457 31.4061 1.12457 30.9473 1.21584C29.063 1.59065 27.5911 3.06256 27.2163 4.94684C27.125 5.40568 27.125 5.95852 27.125 7.06207Z"
                       stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <Path
                 d="M1 7.06207V37.9371C1 39.0406 1 39.5924 1.09127 40.0513C1.46608 41.9355 2.93798 43.4093 4.82227 43.7841C5.28111 43.8754 5.8329 43.8754 6.93644 43.8754C8.03999 43.8754 8.59389 43.8754 9.05273 43.7841C10.937 43.4093 12.4097 41.9355 12.7845 40.0513C12.875 39.5965 12.875 39.0503 12.875 37.9661V7.03302C12.875 5.94879 12.875 5.40164 12.7845 4.94684C12.4097 3.06256 10.936 1.59065 9.05168 1.21584C8.59283 1.12457 8.04106 1.12457 6.9375 1.12457C5.83394 1.12457 5.28111 1.12457 4.82227 1.21584C2.93799 1.59065 1.46608 3.06256 1.09127 4.94684C1 5.40568 1 5.95852 1 7.06207Z"
                      stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </Svg>
             }
            </Pressable>

            <Pressable title="forward" onPress={() => {props.seekTimeVideo(10)}}>
                <Svg width="40" height="40" viewBox="0 0 47 37" fill="none" xmlns="http://www.w3.org/2000/Svg">
                    <Path
                        d="M36 21L46 11M46 11L36 1M46 11H13.5C6.59644 11 1 16.5964 1 23.5C1 30.4036 6.59644 36 13.5 36H26"
                        stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </Svg>
            </Pressable>
            <Pressable title="next" onPress={() => {props.next()}}>
                <Svg width="40" height="40" viewBox="0 0 35 45" fill="none" xmlns="http://www.w3.org/2000/Svg">
                    <Path
                        d="M33.5417 1.79169V43.2084M1 18.2734V26.7264C1 32.1315 1 34.8343 2.13466 36.3916C3.12427 37.7499 4.64389 38.6219 6.31576 38.7923C8.23266 38.9877 10.5682 37.6258 15.237 34.9024L22.4824 30.6759L22.5075 30.6614C27.0973 27.984 29.3938 26.6443 30.1676 24.8979C30.8439 23.3716 30.8439 21.6308 30.1676 20.1045C29.3924 18.3549 27.0889 17.0112 22.4824 14.3241L15.237 10.0976C10.5683 7.37413 8.23266 6.01177 6.31576 6.20717C4.64389 6.3776 3.12427 7.25147 2.13466 8.60972C1 10.167 1 12.8684 1 18.2734Z"
                        stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </Svg>

            </Pressable>
        </View>
    );
}


export default MediaBar;