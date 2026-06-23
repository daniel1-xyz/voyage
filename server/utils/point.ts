import { PointAttributes } from "../models/point";

const MIN_CHARACTERS_DESC = 1;
const MAX_CHARACTERS_DESC = 256;

export const validatePoint = (point: Omit<PointAttributes, "id">): boolean => {
  return !(
    point.latitude > 90 ||
    point.latitude < -90 ||
    (!point.latitude && point.latitude !== 0) ||
    point.longitude > 180 ||
    point.longitude < -180 ||
    (!point.longitude && point.longitude !== 0) ||
    point.description.length < MIN_CHARACTERS_DESC ||
    point.description.length > MAX_CHARACTERS_DESC ||
    (point.price && (point.price < 0 || point.price % 1 !== 0))
  );
};
