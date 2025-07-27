import React, { useState,useEffect,useRef } from 'react';
import {PauseOutlined,CaretRightOutlined} from '@ant-design/icons'
import format from 'date-fns/format'
import './Message.css'
import Time from '../Time';
import MessageStatus from '../MessageStatus';
import AudioPlayer from '../AudioPlayer';
import Icon from '../Icon'

function Message({
    user={}, 
    avatar, 
    text,
    audio, 
    date,
    isMe=false,
    isReaded,
    attachments,
    isTyping,
    }) {
        
    return ( 
    <div className={` message ${isMe?'message-isMe ':''}${isTyping?'message-isTyping ':''}${audio?'message-isAudio ':''}`} >
        <div className="message-avatar">
            <Icon user={user}/>
        </div>
        <div className="message-content">
            <div className="message-bubble">
            {attachments&&
                <div className="message-attachments">
            {
                attachments && attachments.map((item,index)=>(
                    <div className="message-attachments-item" key={index}>
                        <img src={item.url} alt="" />
                    </div>
                ))
            }
                </div>}
                {text&& 
                    <p className="message-text">{text}</p>
                }
                
                {isTyping&& 
                <div className="message-typing">
                    <span />
                    <span />
                    <span />
                </div>
                }
                {audio&&
                    <AudioPlayer audio={audio}/>
                    
                }
            </div>
            {date&& 
                <span className="message-date"> 
                    <Time date={date}/>
                </span>
            }
        </div>
        

            {!isTyping&& <MessageStatus isMe={isMe} isReaded={isReaded}/>}
    </div>
    );
}

export default Message;