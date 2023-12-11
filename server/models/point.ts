const { DataTypes } = require("sequelize");
const { Table, Column, Model } = require("sequelize-typescript");

const { db } = require("../config/database");

interface PointAttributes {
  id: string;
  latitude: number;
  longitude: number;
  desc: string;
  pointType: string;
  price: number;
  createdAt: Date;
}

@Table
class Point extends Model<PointAttributes> {
  declare id: string;
  declare latitude: number;
  declare longitude: number;
  declare desc: string;
  declare pointType: string;
  declare price: number;
  declare createdAt: Date;
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
  }
);

export { Point };
