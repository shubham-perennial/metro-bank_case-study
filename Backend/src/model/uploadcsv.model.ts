import { Schema, Document, model, Model } from "mongoose";

interface Icsv extends Document {
  Name: string;
  Salery: number;
  Company: string;
}

const csvSchema = new Schema<Icsv>(
  {
    Name: { type: String, required: true },
    Salery: { type: Number, required: true },
    Company: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const csvTransactions: Model<Icsv> = model("csvTransactions", csvSchema);

export default csvTransactions;
