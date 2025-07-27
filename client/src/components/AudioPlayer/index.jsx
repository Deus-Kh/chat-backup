import React, { useState, useRef, useEffect, useCallback } from "react";
import { useWavesurfer } from '@wavesurfer/react'
import {PauseOutlined,CaretRightOutlined, LoadingOutlined } from '@ant-design/icons'


const AudioPlayer = ({ audio}) => {
  const containerRef = useRef(null)
  const audioMessageRef = useRef(null)
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);

  const { wavesurfer, isReady, isPlaying, currentTime} = useWavesurfer({
    container: containerRef,
    url: audio,
    height: 30,
    audioRate: playbackRate,
    barWidth: 1,
    barGap: 2,
    barRadius: 2,
  })
  
  useEffect(() => {
    if (!wavesurfer) return;
    
    wavesurfer.on("ready", () => {
      const audioDuration = wavesurfer.getDuration();
      setDuration(audioDuration); 
    });
  

    const handleLoading = () => {
      const isUserMessage = audioMessageRef.current?.closest(".message-isMe");
      wavesurfer.setOptions({
        waveColor: isUserMessage ? "#3674ff" : "white",
      });
    };

    const handlePlay = () => {
      const isUserMessage = audioMessageRef.current?.closest(".message-isMe");
      wavesurfer.setOptions({
        waveColor: isUserMessage ? "#0f3997" : "#0f3997",
        progressColor: isUserMessage ? "#3674ff" : "white",
      });
    };

    wavesurfer.on("loading", handleLoading);
    wavesurfer.on("play", handlePlay);
    wavesurfer.on('interaction',handlePlay)

    return () => {
      wavesurfer.un("loading", handleLoading);
      wavesurfer.un("play", handlePlay);
    };
  }, [wavesurfer]);

  const onPlayPause = useCallback(() => {
    if (wavesurfer) {
      wavesurfer.playPause();
    }
  }, [wavesurfer]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };


  // Меняем скорость "на лету"
  // const changePlaybackRate = useCallback(() => {
  //   if (!wavesurfer || !isReady) return;

  //   const newRate = playbackRate === 1 ? 1.5 : playbackRate === 1.5 ? 2 : 1;
  //   setPlaybackRate(newRate);
  //   wavesurfer.setPlaybackRate(newRate); 
  // }, [wavesurfer, playbackRate, isReady]);

  return (
    <>
      <div className="message-audio" ref={audioMessageRef}>

        <div className="message-audio-button">
          <button onClick={onPlayPause}> {!isReady?<LoadingOutlined />:isPlaying ? <PauseOutlined /> : <CaretRightOutlined />}</button>
        </div>
        <div className="message-audio-progress" style={{ width: '200px' }} ref={containerRef} />
        <div className="message-audio-time">{(!isPlaying ? formatTime(duration) : formatTime(currentTime || 0))}</div>

        {/* <div className="message-audio-button">
            <button onClick={changePlaybackRate} style={{fontSize:'.9rem'}}>
              {playbackRate}x
            </button>
          </div> */}
      </div>
   </>
  );
};

export default AudioPlayer;