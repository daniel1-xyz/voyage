export type PointRating = 1 | 2 | 3 | 4 | 5;

export type PointRatingRow = {
  rating: PointRating;
  pointId?: string;
  ratingId?: string;
};

export const MIN_RATING_LIMIT = 1;
export const MAX_RATING_LIMIT = 5;
