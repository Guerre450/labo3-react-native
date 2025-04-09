import { StatusBar } from 'expo-status-bar';
import Svg, { Circle, Rect, Path } from 'react-native-svg';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { CastButton } from 'react-native-google-cast'
import Header from './Components/Header/Header';
import MediaBar from './Components/MediaBar/MediaBar';
import { CastActions } from './utilities/CastActions';
import Bar from './Components/ProgressBar/Bar';

export default function App() {



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
  const styles = StyleSheet.create({

    container : {
      width : "100%",
      backgroundColor: "grey",
      flexDirection: "column",
      alignItems: "center",

    },
    item : {
      fontSize : 22,
      textAlign : "center",

    }

  


  });
  return (
    <View style={styles.container}>
      <CastButton style={{width: 70, height: 70, tintColor: 'black'}}/>
      <Header  startVideo={startVideo}></Header>
      <Bar mediaStatus={curMediaStatus} streamPos={streamPos} changeTime={changeTime}></Bar>
      <MediaBar mediaStatus={curMediaStatus}
       next={goNext}
        prev={goPrev}
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
