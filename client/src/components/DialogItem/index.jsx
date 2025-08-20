import React,{useEffect, useState} from "react";
import format from 'date-fns/format'
import isToday from 'date-fns/isToday'
import differenceInWeeks from 'date-fns/differenceInWeeks'
import './DialogItem.css'
import Time from "../Time";
import MessageStatus from "../MessageStatus";
import Icon from "../Icon";



const getMessageTime = created_at=>{
    if (isToday(created_at)) {
        return format(created_at,"HH:mm")
    }else if(differenceInWeeks(created_at,new Date())===0){
        return format(created_at,"eee")
    }
    else{
        return format(created_at,"dd.MM.yyyy")
    }
}

function DialogItem({_id, user,message,unreaded,isMe, onSelect,currentDialogId}) {
    // console.log(_id);
    
    
    return (
         <div 
            // className={`dialogs-item ${user.isOnline?`isOnline`:''} ${currentDialogId==_id?`current-dialog`: ''}`}
            className={`dialogs-item  ${currentDialogId===_id?`current-dialog`: ''}`}
            onClick={onSelect.bind(this, _id)}
            >
            <div className="dialogs-item-avatar">
                <Icon user={user}/>
                
            </div>
            <div className="dialogs-item-content">
                <div className="dialogs-item-top">
                    <b>{user.username}</b>
                    
                    <span>
                    <MessageStatus isMe={isMe} isReaded={message.isReaded}/>
                            {getMessageTime(message.created_at)}
                        {/* <Time date={message.created_at}/> */}
                        
                        </span>
                </div>
                <div className="dialogs-item-bottom">
                    <p>{message.text}</p>
                    
                    {unreaded>0 && !isMe&& <div className="count">{unreaded}</div>}
                    
                </div>
            </div>
         </div> 
         );
}

export default DialogItem;