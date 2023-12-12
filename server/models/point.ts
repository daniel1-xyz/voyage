import { DataTypes, Model } from "sequelize";
import { db } from "../config/database";

interface PointAttributes {
  id: string;
  latitude: number;
  longitude: number;
  desc: string;
  pointType: string;
  price: number;
  createdAt: Date;
}

class Point extends Model implements PointAttributes {
  id!: string;
  latitude!: number;
  longitude!: number;
  desc!: string;
  pointType!: string;
  price!: number;
  createdAt!: Date;
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
    desc: {
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
    createdAt: {
      type: DataTypes.DATE,
    },
  },
  {
    sequelize: db,
    modelName: "point",
    tableName: "points",
    schema: "public",
  }
);

export { Point };
