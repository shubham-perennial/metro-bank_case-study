import { Schema, Document, model, Model } from "mongoose";

interface Itransactions extends Document {
  file_csv: string;
}

const transactionSchema = new Schema<Itransactions>(
  {
    file_csv: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const transactions: Model<Itransactions> = model(
  "transaction",
  transactionSchema
);

export default transactions;
