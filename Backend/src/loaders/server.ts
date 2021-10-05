import app from "../index";
import { connect, sequelize } from "../config/db";
import User from "../model/user.model";
import Services from "../model/services.model";

app.listen(2244, async () => {
  await connect();
  await sequelize;
  await sequelize.sync();
  console.log("listen on port 2244");
});
