import React, { useState, useRef, useEffect, useCallback } from "react";
import {PauseOutlined,CaretRightOutlined} from '@ant-design/icons'
import format from 'date-fns/format'
// import WavesurferPlayer from '@wavesurfer/react'


const AudioPlayer = ({ audio}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [audioTime, setAudioTime] = useState(0)
  const audioEl = useRef(null);

  useEffect(() => {
    const audioElement = audioEl.current;

    const handleLoadedData = () => {
      setDuration(audioElement.duration);
      setAudioTime(format(new Date((audioElement.duration*1000)),'mm:ss'))
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audioElement.currentTime);
      setAudioTime(format(new Date((audioElement.currentTime*1000)),'mm:ss'))
    };
    
    audioElement.addEventListener("loadeddata", handleLoadedData);
    audioElement.addEventListener("timeupdate", handleTimeUpdate);
    
    return () => {
      audioElement.removeEventListener("loadeddata", handleLoadedData);
      audioElement.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioEl.current.pause();
    } else {
      audioEl.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (event) => {
    const seekTime = event.target.value;
    audioEl.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };


  return (
    // <div>
    //   <audio ref={audioEl} src={audio} />
    //   <div>
    //     <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>
    //     <input
    //       type="range"
    //       value={currentTime}
    //       max={duration || 0}
    //       onChange={handleSeek}
    //     />
    //     <div>{formatTime(currentTime)}</div>
    //     <div>{formatTime(duration)}</div>
    //   </div>
    // </div>
        <div className="message-audio">
        <audio ref={audioEl}  src={audio} preload="auto" onEnded={()=>{setIsPlaying(false)}} />
        <div className="message-audio-button">
            <button onClick={togglePlay}> {isPlaying? <PauseOutlined />:<CaretRightOutlined/>}</button>
        </div>
        <div className="message-audio-progress">
        
        
            <input type="range" onChange={handleSeek} value={currentTime}  max={duration||0}id="audioProgress" />
        </div>
        <div className="message-audio-time">{audioTime}</div>
    </div>
  );
};

export default AudioPlayer;