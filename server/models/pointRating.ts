import { DataTypes, Model } from "sequelize";
import { db } from "../config/database";

interface PointAttributes {
  ratingId: string;
  pointId: string;
  rating: number;
}

export class PointRating extends Model implements PointAttributes {
  ratingId!: string;
  pointId!: string;
  rating!: number;
}

PointRating.init(
  {
    ratingId: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    pointId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize: db,
    modelName: "point",
    tableName: "pointRating",
    schema: "public",
  }
);
