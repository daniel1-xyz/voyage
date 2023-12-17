import axios from "axios";
import { Point } from "../types/point";

export const getPoint = async (pointId: string) => {
  try {
    await axios.get(`/point/${pointId}`, {
      params: {
        id: pointId,
      },
    });
  } catch (error) {
    console.error(error);
  }
};

export const getAllPoints = async () => {
  try {
    await axios.get("/points");
  } catch (error) {
    console.error(error);
  }
};

export const createPoint = async (point: Point) => {
  try {
    await axios.post("/points/new", {
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
