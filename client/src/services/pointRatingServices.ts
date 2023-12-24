import axios from "axios";

const server = axios.create({
  baseURL: "http://localhost:5000",
});

export const addRatingForPoint = (pointId: string) => {};

export const getAllRatingsForPoint = (pointId: string) => {};
