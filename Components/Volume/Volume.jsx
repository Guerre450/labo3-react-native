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
        }
    });


    let imgVolume = () => {
        let val = Math.round(props.value)

            if (val === 0){
                return require('../../assets/imgVolume/off.png');
            }

            else if (val  = 0.9)
            {
                return require('../../assets/imgVolume/min.png');
            }
            else if(val === 1) {
                return require('../../assets/imgVolume/max.png');
            }
    }
    //console.log("volume prop : " + volume );
    return (
        <>
            {/*https://reactnativeelements.com/docs/components/slider*/}
            <View style={styles.contentView}>
                {/*TODO/!*slider horizontal*!/*/}
                <Slider
                    value={props.value}
                    onValueChange={props.setValue}
                    // TODO test
                    onSlidingStart={null}
                    onSlidingComplete={null}
                    maximumValue={1}
                    minimumValue={0}
                    thumbImage={imgVolume()}
                    step={0.1}
                    allowTouchTrack
                    trackStyle={{ height: 5, backgroundColor: 'black' }}
                    // TODO{/*ajouter une valeur au curseur du slider*/}
                    thumbProps={(props.value)}>
                    minimumTrackTintColor={bgColor()}
                    maximumTrackTintColor={'#FFFFFF'}
                </Slider>
            </View>
        </>)

}