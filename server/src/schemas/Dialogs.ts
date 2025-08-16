import mongoose, {Schema} from 'mongoose'

import { IMessage } from "./Messages";
import { IUser } from "./Users";

export interface IDialog extends Document {
  partner: IUser | string;
  author: IUser | string;
  messages: IMessage[];
  lastMessage: IMessage | string;
}

const DialogsSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    partner: {
        type: Schema.Types.ObjectId, 
        ref:'User',
        required:true},
    lastMessage:{
        type: Schema.Types.ObjectId, 
        ref:'Message'
    },

},{
    timestamps:true
})


const DialogModel = mongoose.model('Dialog', DialogsSchema)

export default DialogModel;


