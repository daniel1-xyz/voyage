export type PointRating = 1 | 2 | 3 | 4 | 5;

export type PointRatingRow = {
  rating: PointRating;
  pointId?: string;
  ratingId?: string;
};
