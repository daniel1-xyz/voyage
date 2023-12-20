import { PointType } from "./pointTypes";

export type Point = {
  latitude: number;
  longitude: number;
  description: string;
  pointType: PointType;
  price?: number;
  id?: string;
};
