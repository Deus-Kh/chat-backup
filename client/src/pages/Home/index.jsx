import React from 'react';
import { Route } from 'react-router-dom';
import {  Message , AudioPlayer, Status, ChatInput, ScrollTo} from '../../components';
import { Dialogs, Messages} from '../../containers';
import {TeamOutlined, FormOutlined, EllipsisOutlined, SmileOutlined} from '@ant-design/icons'
import { Input, Button } from "antd";
// import AudioPlayer from '../../components/audio';

import dialogsJSON from '../../dialogs.json'

const onSearch = (value, _e, info) => console.log(info?.source, value);
function Home() {
    return (
        <>
            <section className="home">
                <div className="chat">
                    <div className="chat-sidebar">
                        <div className="chat-sidebar-header">
                            <div>
                                <TeamOutlined style={{marginRight:'5px'}} />
                                <span>Dialogs list</span>
                            </div>
                            <Button className='my-button' icon={<FormOutlined />}  />
                            
                        </div>
                        
                    <div className="chat-sidebar-dialogs">
                    <Dialogs userId={125} items={dialogsJSON}/> 
                {/* <ScrollTo coord={1}/> */}
                    </div>
                    </div>
                    
                    

                    <div className="chat-dialog">
                        <div className="chat-dialog-header">
                            <div/>
                            <div className="chat-dialog-header-info">
                            <b className="chat-dialog-header-name">John Smith</b>
                                <Status online={true} />
                            </div>
                            <Button className='my-button' icon={<EllipsisOutlined style={{fontSize:'1.65em'}} />}  />
                            
                        </div>
                        <div className="chat-dialog-messages"><Messages/></div>
                        <div className="chat-dialog-input">
                        <ChatInput></ChatInput>
                        </div>
                    </div>
                </div>







                {/* <Dialogs userId={125} items={[
                    {
                        _id:"22d6a669fc9f22ea7cd6c51986131ed2",
                        user:{
                            _id:"22d6a669fc9f22ea7cd6c51986131ed2",
                            username: 'Bob2005',
                            avatar:'./avatar2.jpg',
                            isOnline:false
                        },
                        lastMessage:{
                            user:{
                                _id:"22d6a669fc9f22ea7cd6c51986131ed2",
                                username: 'Bob2005',
                                avatar:'./avatar2.jpg',
                            },
                            text:'Hello my dear friend',
                            isReaded:false,
                            created_at:'Tue Dec 17 2024 19:21:07',
                        }
                    },
                    {
                        _id: "52d6a669fc9f22ea7cd6c51986131ed0",
                        user:{
                            _id: "52d6a669fc9f22ea7cd6c51986131ed0",
                            username: 'John Smith',
                            avatar:'avatar1.jpg',
                            isOnline:true
                        },
                        lastMessage:{
                            user:{
                                _id:"52d6a669fc9f22ea7cd6c51986131ed0",
                                username: 'John Smith',
                                avatar:'avatar1.jpg',
                            },
                            text:'Good bie, my friend',
                            isReaded:true,
                            created_at:'Tue Mar 13 2024 23:21:07',
                        }
                    }
                ]}/> */}


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
                    ></Message> */}
                    
            </section>
        </>
    );
}

export default Home;