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

export default CsvTransactions;
