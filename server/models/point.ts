const { DataTypes, Model } = require("sequelize");
const { Table, Column } = require("sequelize-typescript");

const { db } = require("../config/database");

interface PointAttributes {
  id: string;
  latitude: number;
  longitude: number;
  desc: string;
  pointType: string;
  price: number;
}

@Table({
  tableName: "points",
})
class Point extends Model implements PointAttributes {
  id!: string;
  latitude!: number;
  longitude!: number;
  desc!: string;
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
  },
  {
    sequelize: db,
    modelName: "point",
    tableName: "points",
  }
);

export { Point };
