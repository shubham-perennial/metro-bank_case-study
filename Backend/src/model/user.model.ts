// import { Schema, Model, model, Document } from "mongoose";
import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db";
// const sequelize = new Sequelize(
//   "mysql://root:perennial@2021@localhost:3306/metrobank"
// );

/// creating Model for sql

class User extends Model {
  public name!: string;
  public email!: string;
  public password!: string;
  public confirmPassword!: string;
  public dateOfIncrp!: string;
} //  /// if you do .define then no need of this method but with .define method you won't be able to access 
// properties of obj return from sql query

User.init(
  {
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    confirmPassword: { type: DataTypes.STRING, allowNull: false },
    dateOfIncrp: { type: DataTypes.STRING, allowNull: false },
  },
  {
    tableName: "users",
    sequelize,
  }
);

// const User = sqlConnect.define("user", {
//   name: { type: DataTypes.STRING, allowNull: false },
//   email: { type: DataTypes.STRING, allowNull: false },
//   password: { type: DataTypes.STRING, allowNull: false },
//   confirmPassword: { type: DataTypes.STRING, allowNull: false },
//   dateOfIncrp: { type: DataTypes.STRING, allowNull: false },
// });



export default User;
