import React from "react";
import checkedPng from '../../assets/checked-blue.png'
import sendedPng from '../../assets/sended.png'
import './MessageStatus.css'

function MessageStatus ({isMe,isReaded}) {
    return(
        <>
        
        {isMe
            && 
            (<div className="message-checkedIcon">
                <img src={isReaded?checkedPng:sendedPng} alt=""  />
            </div>)
        }</>
    )
}



export default MessageStatus;