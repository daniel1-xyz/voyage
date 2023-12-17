import { DataTypes, Model } from "sequelize";
import { db } from "../config/database";

interface PointAttributes {
  id: string;
  latitude: number;
  longitude: number;
  description: string;
  pointType: string;
  price: number;
}

export class Point extends Model implements PointAttributes {
  id!: string;
  latitude!: number;
  longitude!: number;
  description!: string;
  pointType!: string;
  price!: number;
}

Point.init(
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    latitude: {
      type: DataTypes.DECIMAL(8, 6),
      allowNull: false,
    },
    longitude: {
      type: DataTypes.DECIMAL(9, 6),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    pointType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize: db,
    modelName: "point",
    tableName: "points",
    schema: "public",
  }
);
