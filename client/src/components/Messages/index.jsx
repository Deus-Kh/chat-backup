import React, {useState, useEffect} from "react";
import { Empty, Alert, Flex, Spin} from 'antd'
import { Message } from "../";
import './Messages.css'

function Messages({isLoading,items}) {
    return <>{isLoading ? (<Spin tip="Loading..."><div style={{padding:50}}/></Spin>): items && items.length>0?
        
            items.map((item, index) =>(<Message {...item} key={index} avatar={item.avatar} />))
       
:
        <Empty description="No messages"/>} </>


    }
         


export default Messages;

{/* <Message 
                avatar={'avatar2.jpg'} 
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur quibusdam id reiciendis, sequi molestias enim ab laborum quas ex eos." 
                date='Sat Mar 16 2024 22:30:50'
            ></Message>
            <Message 
                avatar={'avatar1.jpg'} 
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. " 
                date='Sat Mar 16 2024 22:40:50'
                isMe={true}
                isReaded={true}
            ></Message>
            <Message 
                avatar={'avatar2.jpg'} 
                // text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur quibusdam id reiciendis, sequi molestias enim ab laborum quas ex eos." 
                date='Sat Mar 16 2024 22:30:50'
                isMe={true}
                attachments={[
                    {
                        filename:'image.jpg',
                        url:'./image.jpg'
                    },
                    {
                        filename:'image.jpg',
                        url:'./avatar1.jpg'
                    },
                    // {
                    //     filename:'image.jpg',
                    //     url:'./image.jpg'
                    // }
                ]}
            ></Message>
            <Message 
                isMe={true}
                avatar={'avatar1.jpg'} 
                isTyping
            ></Message>
            <Message 
                avatar={'avatar2.jpg'} 
                date='Sat Mar 22 2024 22:30:50'
                audio='The Neighbourhood.mp3'
            ></Message>
            <Message 
                avatar={'avatar2.jpg'} 
                date='Sat Mar 22 2024 22:30:51'
                audio='second audio.wav'
                isMe={true}
            ></Message>
            <Message 
                avatar={'avatar2.jpg'} 
                date='Sat Mar 22 2024 22:30:51'
                audio='third audio.ogg'
                isMe={true}
            ></Message> 
            <Message 
                avatar={'avatar2.jpg'} 
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur quibusdam id reiciendis, sequi molestias enim ab laborum quas ex eos." 
                date='Sat Mar 16 2024 22:30:50'
            ></Message>
            <Message 
                avatar={'avatar2.jpg'} 
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur quibusdam id reiciendis, sequi molestias enim ab laborum quas ex eos." 
                date='Sat Mar 16 2024 22:30:50'
            ></Message>
            <Message 
                avatar={'avatar2.jpg'} 
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur quibusdam id reiciendis, sequi molestias enim ab laborum quas ex eos." 
                date='Sat Mar 16 2024 22:30:50'
            ></Message>
            <Message 
                avatar={'avatar2.jpg'} 
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur quibusdam id reiciendis, sequi molestias enim ab laborum quas ex eos." 
                date='Sat Mar 16 2024 22:30:50'
            ></Message>
            <Message 
                avatar={'avatar2.jpg'} 
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur quibusdam id reiciendis, sequi molestias enim ab laborum quas ex eos." 
                date='Sat Mar 16 2024 22:30:50'
            ></Message>
            <Message 
                avatar={'avatar2.jpg'} 
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur quibusdam id reiciendis, sequi molestias enim ab laborum quas ex eos." 
                date='Sat Mar 16 2024 22:30:50'
            ></Message>
            <Message 
                avatar={'avatar2.jpg'} 
                text="rem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur quibusdam id reiciendis, sequi molestias enim ab laborum quas ex eos." 
                date='Sat Mar 16 2024 22:30:50'
            ></Message> */}