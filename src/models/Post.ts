import { model, connect, Mongoose } from "mongoose";
import mongoose from "mongoose";

interface IUser {
    title: string;
    desc: string;
    img: string;
    content: string;
    userName: string;
}

const { Schema } = mongoose;

const postSchema = new Schema<IUser>(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    content: { type: String, required: true },
    userName: { type: String, required: true },
  },
  { timestamps: true }
);

// const User = model<IUser>("User", userSchema);

// run().catch((err) => console.log(err));

// async function run() {
//   // 4. Connect to MongoDB
//   await connect("mongodb://127.0.0.1:27017/test");

//   const user = new User({
//     name: "",
//     email: "",
//     avatar: "https://i.imgur.com/dM7Thhn.png",
//   });
//   await user.save();

//   console.log(user.email); // 'bill@initech.com'
// }

export default mongoose.models.User || mongoose.model("Post", postSchema);
