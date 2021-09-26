import { Schema, Document, model, Model } from "mongoose";

interface IService extends Document {
  title: string;
  src: string;
}

const serviceSchema = new Schema<IService>(
  {
    title: { type: String, required: true },
    src: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const service: Model<IService> = model("service", serviceSchema);

export default service;
