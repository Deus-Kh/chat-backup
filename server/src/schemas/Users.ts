import mongoose, {Schema, Document} from 'mongoose'
import { generatePasswordHash } from "../utils";


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
        default:Date.now()
    }

},{
    timestamps:true
})


UserSchema.set("toJSON", {
  virtuals: true,
});

UserSchema.pre<IUser>("save", async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;

  if (!user.isModified("password")) {
    return next();
  }

  user.password = await generatePasswordHash(user.password);
  user.confirmedHash = await generatePasswordHash(new Date().toString());
});

const UserModel = mongoose.model('User', UserSchema)

export default UserModel;


