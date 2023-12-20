import { PointType } from "./pointTypes";

export type MapPoint = {
  latitude: number;
  longitude: number;
  description: string;
  pointType: PointType;
  price?: number;
  id?: string;
};
