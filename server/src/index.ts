import express from 'express';
import mongoose from "mongoose";
import bodyParser from 'body-parser'
// import dotenv from 'dotenv';
import {UserModel} from './schemas'
import {UserController, DialogController, MessageController} from './controllers'
import { updateLastSeen,checkAuth } from './middlewares';

mongoose.connect('mongodb://127.0.0.1:27017/chat')

const app = express();
require('dotenv').config()
app.use(bodyParser.json());

const User = new UserController();
const Dialog = new DialogController() 
const Message = new MessageController() 

app.use(checkAuth)
app.use(updateLastSeen)
app.get('/user/:id', User.index)
app.delete('/user/:id', User.delete)
app.post('/user/registration', User.create)
app.post('/user/login', User.login)

app.get('/dialogs/:id', Dialog.index)
app.post('/dialogs/create', Dialog.create)
app.delete('/dialogs/:id', Dialog.delete)

app.get('/dialog/:dialogId/messages', Message.index)
app.post('/messages/', Message.create)
app.delete('/messages/:id', Message.delete)


app.get('/', (req, res)=>{
    res.send('hello')
})
app.listen(process.env.SERVER_PORT, ()=>{
    console.log(`App listen http://localhost:${process.env.SERVER_PORT} port`);
    
})  