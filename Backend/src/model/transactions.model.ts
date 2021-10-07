// import { Schema, Document, model, Model } from "mongoose";
import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db";

class Transactions extends Model {
  public file_csv!: string;
}

Transactions.init(
  {
    file_csv: { type: DataTypes.STRING, allowNull: false },
  },
  { tableName: "transactions", sequelize }
);

// interface Itransactions extends Document {
//   file_csv: string;
// }

// const transactionSchema = new Schema<Itransactions>(
//   {
//     file_csv: { type: String, required: true },
//   },
//   {
//     timestamps: true,
//     versionKey: false,
//   }
// );

// const transactions: Model<Itransactions> = model(
//   "transaction",
//   transactionSchema
// );

export default Transactions;
