import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db";

class User extends Model {
  public name!: string;
  public email!: string;
  public password!: string;
  public confirmPassword!: string;
  public dateOfIncrp!: string;

}

User.init(
  {
    uuid: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4 },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    confirmPassword: { type: DataTypes.STRING, allowNull: false },
    dateOfIncrp: { type: DataTypes.STRING, allowNull: false },
  },
  {
    tableName: "users",
    sequelize,
  }
);

export default User;
