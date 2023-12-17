import { PointType } from "./pointTypes";

export type Point = {
  latitude: number;
  longitude: number;
  desc: string;
  pointType: PointType;
  price?: number;
};
