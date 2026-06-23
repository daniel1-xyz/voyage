import { DataTypes, Model } from "sequelize";
import { db } from "../config/database";

export interface PointRatingAttributes {
  ratingId: string;
  pointId: string;
  rating: number;
}

export class PointRatingModel extends Model implements PointRatingAttributes {
  ratingId!: string;
  pointId!: string;
  rating!: number;
}

PointRatingModel.init(
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
