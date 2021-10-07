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

export default Transactions;
