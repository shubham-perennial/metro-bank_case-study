import mongoose from "mongoose";
import { Sequelize } from "sequelize";
// const Sequelize = require("sequelize");

require("dotenv").config();

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;

const connect = () => {
  return mongoose.connect(
    `mongodb+srv://${username}:${password}@cluster0.vfxfx.mongodb.net/metroBank?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  );
};

const sequelize = new Sequelize("mysql://root:perennial@2021@localhost:3306/metrobank");

export {connect, sequelize};
