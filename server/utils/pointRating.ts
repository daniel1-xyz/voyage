import { PointRatingAttributes } from "../models/pointRating";
import { PointRatingModel } from "../models/pointRating";

export const validatePointRating = (
  pointRating: Omit<PointRatingAttributes, "ratingId">
): boolean => {
  return !(
    (
      pointRating.rating > 5 ||
      pointRating.rating < 1 ||
      pointRating.rating % 1 !== 1
    )
    // TODO: CHECK IF POINT ID EXISTS IN DB
  );
};

export const getRatingsForPoint = async (pointId: string) => {
  return await PointRatingModel.findAll({
    where: { pointId: pointId },
  });
};

export const calcAverageRatingForPoint = async (
  ratingsForPoint: PointRatingModel[]
) => {
  let sum = 0;
  return ratingsForPoint.length
    ? (ratingsForPoint.forEach((pointRating) => (sum += pointRating.rating)),
      parseFloat((sum / ratingsForPoint.length).toFixed(1)))
    : undefined;
};
