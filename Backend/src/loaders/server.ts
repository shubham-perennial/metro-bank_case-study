import app from "../index";
import { connect, sequelize } from "../config/db";
import User from "../model/user.model";
import Services from "../model/services.model";
import Profile from "../model/profile.model";
import ServiceProfile from "../model/serviceProfile.model";

User.hasOne(Profile);
// Profile.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
Services.belongsToMany(User, {
  through: ServiceProfile,
});
User.belongsToMany(Services, {
  through: ServiceProfile,
});

app.listen(2244, async () => {
  await connect();
  await sequelize;
  await sequelize.sync();
  console.log("listen on port 2244");
});
