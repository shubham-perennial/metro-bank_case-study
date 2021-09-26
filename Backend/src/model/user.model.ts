import { Schema, Model, model, Document } from "mongoose";
// creating an interface for representing a doc in mongodb
interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  dateOfIncrp: string;
}

/// creating a schema corresponding to the interface

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: false },
    email: { type: String, required: true },
    password: { type: String, required: true },
    confirmPassword: { type: String, required: true },
    dateOfIncrp: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

/// create a model instance
const Register: Model<IUser> = model("user", userSchema);
export default Register;
