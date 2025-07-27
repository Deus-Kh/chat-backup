import React, {useState} from "react";
import { Input } from "antd";
import {SmileOutlined,PaperClipOutlined,AudioOutlined,SendOutlined} from '@ant-design/icons'
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import './ChatInput.css'




function ChatInput(props) {
    const [value, setValue] = useState('');
    const [showPicker, setShowPicker] = useState(false);
    const handleEmojiSelect = (emoji) => {
        setValue(value => value + emoji.native);
      };
    const prefix=(<SmileOutlined onClick={() => setShowPicker(!showPicker)}/>)
    const actions=(<div className="chat-input-actions">
        <PaperClipOutlined  />
        {!value? <AudioOutlined />:
        <SendOutlined />}
        </div>)
    return (

        <>
        
        <div className="chat-input">
        {showPicker&&<div style={{position:'absolute', bottom:50}}><Picker
        
        data={data}
        onEmojiSelect={handleEmojiSelect}
        theme="auto"
        // onClickOutside={showPicker&&setShowPicker(false)}
      /></div>}
            <div className="chat-input-smile-btn">
            
            </div>
            <Input placeholder="Jnput a message..." value={value}  onChange={e => setValue(e.target.value)} variant="borderless" size="large" prefix={prefix}  suffix={actions} />
            
        </div>
        
        </>

         );
}

export default ChatInput;
