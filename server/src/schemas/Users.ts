import mongoose, {Schema} from 'mongoose'



export interface IUser extends Document {
    email: string,
    username:string,
    password: string,
    confirmed:boolean,
    avatar?:string,
    confirmedHash?:string,
    lastSeen?:Date
}

const UserSchema = new Schema({
    email: {
        type: String,
        unique:true,
        required: true,

    },
    avatar: String,
    username: {
        type: String,
        required: "Username is required",
    },
    password: {
        type: String,
        required: "Password is required",
    },
    confirmed: {
        type: Boolean,
        default: false
    },
    confirmedHash:String,
    lastSeen:{
        type:Date,
        default:Date.now
    }

},{
    timestamps:true
})


const UserModel = mongoose.model('User', UserSchema)

export default UserModel;


