import React, { useState } from 'react';
import GoogleCast, { useRemoteMediaClient } from 'react-native-google-cast';

export const CastActions = () => {
    const client = useRemoteMediaClient(); 
    const [curMediaStatus, setCurMediaStatus] = useState(null)
    const [showPlay, setShowPlay] = useState(false);
    const [isStarted, setIsStarted] = useState(false);
    const [streamPos, setSreamPos] = useState(0);
    const videoList = [
        'https://transfertco.ca/video/DBillPrelude.mp4',
        'https://transfertco.ca/video/DBillSpotted.mp4',
        'https://transfertco.ca/video/usa23_7_02.mp4',
    ];
    
    const sessionManager = GoogleCast.getSessionManager();

    React.useEffect(() => {
        const listener = sessionManager.onSessionStarted((session) => {
            setShowPlay(true);
            setListeners();
        });

        if (showPlay) {
            listener.remove()
        }

        return () => {}
    
    }, [client]);


    const startVideo = () => {
        if (client){

        
        client.loadMedia({
            autoplay: true,
            queueData: {
                items : [
                    {
                        mediaInfo : {
                            contentUrl: videoList[0],
                            contentType: 'video/mp4'
                        }
                    },
                    {
                        mediaInfo : {
                            contentUrl: videoList[1],
                            contentType: 'video/mp4'
                        }
                    },                            {
                        mediaInfo : {
                            contentUrl: videoList[2],
                            contentType: 'video/mp4'
                        }
                    }
                ],

            },
        });
    }
    }

    const stopVideo = () => {
        sessionManager.endCurrentSession();
    }

    const setListeners = () => {
        if (client) {

            const listenerPlayback = client.onMediaStatusUpdated((mediaStatus) => {
                if (mediaStatus) {
                    setCurMediaStatus(mediaStatus);
                    console.log("status updated = " + mediaStatus.playerState);
                } else {
                    console.log("no media status!");
                }
                
            });

            
            const listenerStarted = client.onMediaPlaybackStarted((mediaStatus) => {
                setIsStarted(true);
                if (mediaStatus) {
                    console.log("status started updated = " +mediaStatus.playerState);
                } else {
                    console.log("no media status!");
                }
                
            });

            const listenerStoped = client.onMediaPlaybackEnded((mediaStatus) => {
                setIsStarted(false);
                if (mediaStatus) {
                    console.log("status ended updated = " + mediaStatus.playerState);
                } else {
                    console.log("no media status!");
                }
                
            });

            const listenerProgress = client.onMediaProgressUpdated((streamPosition) => {
                if (streamPosition) {
                    setSreamPos(streamPosition)
                    console.log("stream pos = " +streamPosition);
                } else {
                    console.log("no media status!");
                }
                
            }, 1);


        }
    }

    const mediaFallBack = () => {
        if (!curMediaStatus && client != null){
            startVideo();
            setListeners();
        }
    }
    const handlePlayPause = () => {
        mediaFallBack();
        if (curMediaStatus){
            console.log(curMediaStatus.playerState)
            if (curMediaStatus.playerState === "playing") {
                client.pause();
            } else {
                client.play();
            }
        }
    };
    const handleSeek = (amount) => {
        mediaFallBack();
        if (curMediaStatus){
            client.seek({
                position : (streamPos + amount),
            })
        }

    }

    const goNext = () => {
        mediaFallBack();
        if (curMediaStatus){
            client.queueNext();
            setListeners();
        }
    }
    const goPrev = () => {
        mediaFallBack();
        if (curMediaStatus){
            client.queuePrev();
            setListeners();
        }
    }

    const changeTime = (amount) => {
        mediaFallBack();
        console.log(amount);
        if (curMediaStatus){
            let progressBarValue = amount // 0-100
            let duration = curMediaStatus.mediaInfo.streamDuration; // temps total video
            let progressBarValueInSec = progressBarValue / 100 * duration
            console.log(progressBarValueInSec);
            client.seek({
                position : (progressBarValueInSec),
            })
        }
    }

    // const volumeDown = (vol) => {
    //     let volume = (vol.media ? vol.media.volume.level/1.0 * 100 : 0)
    //     if(vol == 0){
    //         // TODO mute
    //     }
    //     else:
    //
    // }


    return {
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
        changeTime,
      };

};