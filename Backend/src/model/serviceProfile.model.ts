import { Model } from "sequelize";
import { sequelize } from "../config/db";


class ServiceProfile extends Model {
  public profileId!: number;
  public serviceId!: number;
}

ServiceProfile.init(
  {
    // is this ok to be empty find it as it is creating duplicate column in junction table;
  },
  {
    tableName: "serviceProfile",
    sequelize,
  }
);

export default ServiceProfile;
