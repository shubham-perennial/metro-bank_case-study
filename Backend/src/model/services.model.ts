import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/db";

class Services extends Model {
  public title!: string;
  public icon_url!: string;
}

Services.init(
  {
    uuid: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4 },
    title: { type: DataTypes.STRING, allowNull: false },
    icon_url: { type: DataTypes.STRING, allowNull: false },
  },
  {
    tableName: "services",
    sequelize,
  }
);

export default Services;
