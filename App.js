import { StatusBar } from 'expo-status-bar';
import Svg, { Circle, Rect, Path } from 'react-native-svg';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { CastButton } from 'react-native-google-cast'
import Header from './Components/Header/Header';
import MediaBar from './Components/MediaBar/MediaBar';
import { CastActions } from './utilities/CastActions';
import Bar from './Components/ProgressBar/Bar';
import Volume from "./Components/Volume/Volume";
import PopUpTest from './Components/PopUp/PopUpTest';
import useTutorial from './utilities/tutorial.jsx'
import useClickTracker from './utilities/useClickTracker.jsx'
import { useState } from 'react';


export default function App() {

  const [clicksTracker, logButtonAction] = useClickTracker(null)
  const [text,keyDetection, sessionDetection, timeList] = useTutorial(logButtonAction)
  const {
    handlePlayPause,
    startVideo,
    stopVideo,
    curMediaStatus,
    isStarted,
    showPlay,
    handleSeek,
    goNext,
    goPrev,
    streamPos,
    changeTime
  } = CastActions();


  


  const [testButtonState, setTestButtonState] = useState(false);

  function onTestButtonInteract() {
    setTestButtonState(!testButtonState)
}



  const styles = StyleSheet.create({

    container : {
      width : "100%",
      height: "100%",
      backgroundColor: "grey",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around"

    },
    item : {
      fontSize : 22,
      textAlign : "center",

    }

  


  });
  return (
    <View style={styles.container}>
      <PopUpTest
                      taskTest={text}
                      timeList={timeList}
                      clicksTracker={clicksTracker}
                      isOpen={testButtonState}
                      onClose={onTestButtonInteract}
      ></PopUpTest>
      <CastButton style={{width: 70, height: 70, tintColor: 'black'}}/>
      <Volume ></Volume>

      <Header  startVideo={startVideo} testOpen={onTestButtonInteract} keyDetection={keyDetection}></Header>
      <Bar mediaStatus={curMediaStatus} keyDetection={keyDetection} streamPos={streamPos} changeTime={changeTime}></Bar>
      <MediaBar mediaStatus={curMediaStatus}
       next={goNext}
        prev={goPrev}
        keyDetection={keyDetection}
         seekTimeVideo={handleSeek}
          changePlayState={handlePlayPause}
          
      />
      {/* <Text>bonjour.fr</Text>
      <Image source={{url: 'https://reactnative.dev/docs/assets/p_cat2.png',}} style={{width: 200, height: 200}}/>
        <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
      <StatusBar style="auto" /> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
