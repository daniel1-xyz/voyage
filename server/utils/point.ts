import { PointAttributes } from "../models/point";

const MAX_CHARACTERS_DESC = 256;

export const validatePoint = (point: Omit<PointAttributes, "id">) => {
  return !(
    point.latitude > 90 ||
    point.latitude < -90 ||
    (!point.latitude && point.latitude !== 0) ||
    point.longitude > 180 ||
    point.longitude < -180 ||
    (!point.longitude && point.longitude !== 0) ||
    !point.description ||
    point.description.length > MAX_CHARACTERS_DESC ||
    /* CHECK IF point.pointType FITS TYPE */
    (point.price && (point.price <= 0 || point.price % 1 !== 1))
  );
};
