import mongoose from "mongoose";
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

export default connect;
