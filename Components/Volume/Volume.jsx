import Slider from "@react-native-community/slider";
import {View,StyleSheet} from "react-native";

export default function Volume(props) {
    let volume = (props.media ? props.media.volume.level * 100 : 0)
    let bgColor = () => {
        if (!props.media){
            return `linear-gradient(90deg,red 0%,red ${volume}%,#D9D9D9 0%,#D9D9D9 100%)`;
        }
        return props.media.volume.muted ? "grey" : `linear-gradient(90deg,red 0%,red ${volume}%,#D9D9D9 0%,#D9D9D9 100%)`;
    }
    const styles = StyleSheet.create({
        contentView: {
            padding: 20,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'stretch',
        },
        slider : {
            height: 100,
        }
    });


    let imgVolume = () => {
        let val = props.mediaStatus ? props.mediaStatus.volume : 0.5;

            if (val === 0){
                return require('../../assets/imgVolume/off.png');
            }

            else if (val < 0.9)
            {
                return require('../../assets/imgVolume/min.png');
            }
            else if(val >= 0.9) {
                return require('../../assets/imgVolume/max.png');
            }
    }
    //console.log("volume prop : " + volume );
    return (
        <>
            {/*https://github.com/callstack/react-native-slider*/}
            <View style={styles.contentView}>
                <Slider
                    style={styles.slider}
                    value={props.mediaStatus ? props.mediaStatus.volume : 0.5}
                    lowerLimit={0}
                    upperLimit={1}
                    minimumValue={0}
                    maximumValue={1}
                    onValueChange={ value => {props.changeVolume?.(value) || props.mediaStatus ? props.keyDetection(props.mediaStatus.volume > value ? "high" : "low") : false}}
                    thumbImage={imgVolume()}
                    step={0.1}
                    allowTouchTrack
                    trackStyle={{ height: 5, backgroundColor: 'black' }}
                    thumbProps={(props.value)}
                    minimumTrackTintColor={bgColor()}
                    maximumTrackTintColor={'#FFFFFF'}
                    >
                </Slider>
            </View>
        </>)

}