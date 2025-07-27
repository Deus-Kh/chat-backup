import mongoose, {Schema} from 'mongoose'


const MessageSchema = new Schema({
    text: {
        type: String,
        required: true,

    },
    readed: {
        type: Boolean,
        default:false
    },
    dialog:{
        type: Schema.Types.ObjectId, 
        ref:'Dialog',
        required:true
    },
    user: {
        type: Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    }
    // add  attachments

},{
    timestamps:true
})


const MessageModel = mongoose.model('Message', MessageSchema)

export default MessageModel;

