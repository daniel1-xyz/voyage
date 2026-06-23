import { PointModel } from "../models/point";
import { PointRatingAttributes } from "../models/pointRating";
import { PointRatingModel } from "../models/pointRating";

const MIN_RATING = 1;
const MAX_RATING = 5;

export const validatePointRating = (
  pointRating: Omit<PointRatingAttributes, "ratingId">
): boolean => {
  return (
    !(
      pointRating.rating > MAX_RATING ||
      pointRating.rating < MIN_RATING ||
      pointRating.rating % 1 !== 0
    ) && !!PointModel.findByPk(pointRating.pointId)
  );
};

export const getRatingsForPoint = async (pointId: string) => {
  return await PointRatingModel.findAll({
    where: { pointId: pointId },
  });
};

export const calcAverageRatingForPoint = (
  ratingsForPoint: PointRatingModel[]
) => {
  let sum = 0;
  ratingsForPoint.forEach((pointRating) => (sum += pointRating.rating));
  return parseFloat((sum / ratingsForPoint.length).toFixed(1));
};
