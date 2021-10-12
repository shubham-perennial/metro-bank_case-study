// import { Document, Model, model, Schema } from "mongoose";
import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db";

class Profile extends Model {
  public accountNo!: number;
  public income!: number;
  public spends!: number;
}

Profile.init(
  {
    uuid: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4 },
    accountNo: { type: DataTypes.INTEGER, allowNull: false },
    income: { type: DataTypes.INTEGER, allowNull: false },
    spends: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    tableName: "profiles",
    sequelize,
  }
);

export default Profile;
