import mongoose, {Schema} from 'mongoose'


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


