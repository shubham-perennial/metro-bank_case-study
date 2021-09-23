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
    name: { type: "string", required: false },
    email: { type: "string", required: true },
    password: { type: "string", required: true },
    confirmPassword: { type: "string", required: true },
    dateOfIncrp: { type: "string", required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

/// create a model instance
const Register: Model<IUser> = model("user", userSchema);
export default Register;
