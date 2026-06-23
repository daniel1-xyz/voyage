import axios from "axios";
import { PointRating } from "../types/pointRating";

const server = axios.create({
  baseURL: "http://localhost:5000",
});

export const addRatingForPoint = async (
  pointId: string,
  rating: PointRating
) => {
  try {
    await server.post("/ratings/new", {
      pointId: pointId,
      rating: rating,
    });
  } catch (error) {
    console.error(error);
  }
};

export const getAllRatingsForPoint = async (pointId: string) => {
  try {
    return await server.get(`/ratings/${pointId}`, {
      params: {
        pointId: pointId,
      },
    });
  } catch (error) {
    console.error(error);
  }
};
