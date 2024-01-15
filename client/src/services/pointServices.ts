import axios from "axios";
import { MapPoint } from "../types/point";

const server = axios.create({
  baseURL: "http://localhost:5000",
});

export const getAllPoints = async () => {
  try {
    return await server.get("/points");
  } catch (error) {
    console.error(error);
  }
};

export const getPointById = async (pointId: string) => {
  try {
    return await server.get(`/point/${pointId}`, { params: { pointId } });
  } catch (error) {
    console.error(error);
  }
};

export const createPoint = async (point: MapPoint) => {
  try {
    await server.post("/points/new", {
      latitude: point.latitude,
      longitude: point.longitude,
      description: point.description,
      pointType: point.pointType,
      price: point.price,
    });
  } catch (error) {
    console.error(error);
  }
};
