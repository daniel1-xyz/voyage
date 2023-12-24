import axios from "axios";
import { PointRating } from "../types/pointRating";

const server = axios.create({
  baseURL: "http://localhost:5000",
});

export const addRatingForPoint = (pointId: string, rating: PointRating) => {};

export const getAllRatingsForPoint = (pointId: string) => {};
