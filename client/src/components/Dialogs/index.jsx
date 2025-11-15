import React from "react";
import {Input, Empty} from 'antd'
import './Dialogs.css'
import Time from "../Time";
import MessageStatus from "../MessageStatus";
import DialogItem from "../DialogItem";



function Dialogs({items,userId, onSearch, inputValue, onSelectDialog, currentDialogId}) {
  console.log("Dialogs log", items);
  
    return (
      <>
      <div className="chat-sidebar-search">
                        <Input.Search
                            placeholder="Contacts search"
                            // allowClear
                            onSearch={onSearch}
                            onChange={e => onSearch(e.target.value)}
                            value={inputValue}
                            />
                    </div>
         <div className={`dialogs`}>
           {
           items.length? ( items.toSorted((a,b)=>{
                            let dateA = new Date(a.lastMessage.created_at),
                            dateB = new Date(b.lastMessage.created_at)
                            return dateB-dateA

                            }).map((item,index)=>(
                                <DialogItem 
                                onSelect={onSelectDialog}
                                _id={item._id}
                                key={item._id}
                                user={item.user}
                                message={item.lastMessage}
                                isMe={item.lastMessage.user._id===userId}
                                unreaded={10}
                                currentDialogId={currentDialogId}
                                />
                                ))):<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="No matches"/>
           }
                     
                     
                     
         </div> 
      </>
         );
}

export default Dialogs;