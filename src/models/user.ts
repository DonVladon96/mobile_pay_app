import mongoose from "mongoose";

interface user {
  name: string;
  email: string;
  password: string;
}

const { Schema } = mongoose;

const userSchema = new Schema<user>(
  {
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
