// import { Schema, Document, model, Model } from "mongoose";
import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/db";

class CsvTransactions extends Model {
  public Name!: string;
  public Salery!: number;
  public Company!: string;
}

CsvTransactions.init(
  {
    Name: { type: DataTypes.STRING, allowNull: false },
    Salery: { type: DataTypes.STRING, allowNull: false },
    Company: { type: DataTypes.STRING, allowNull: false },
  },
  { tableName: "csvTransactions", sequelize }
);

// interface Icsv extends Document {
//   Name: string;
//   Salery: number;
//   Company: string;
// }

// const csvSchema = new Schema<Icsv>(
//   {
//     Name: { type: String, required: true },
//     Salery: { type: Number, required: true },
//     Company: { type: String, required: true },
//   },
//   {
//     timestamps: true,
//     versionKey: false,
//   }
// );

// const csvTransactions: Model<Icsv> = model("csvTransactions", csvSchema);

export default CsvTransactions;
