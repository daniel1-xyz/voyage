import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import SaveIcon from "@mui/icons-material/Save";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import { Select, SelectChangeEvent, InputLabel } from "@mui/material";
import { useMapEvents } from "react-leaflet";
import { PointType, pointTypes } from "../../types/pointTypes";
import { Point } from "../../types/point";
import { createPoint } from "../../services/pointServices";
import { SidebarHeader } from "../SidebarHeader/SidebarHeader";
import {
  DividerLine,
  FullHeightForm,
  CoordsSpan,
  CoordsInputFields,
  CoordsInputField,
  LocationButton,
  InputField,
  SelectField,
  SelectItem,
  SaveButton,
  FullHeightFormControl,
} from "./muiStyledComponents";
import { number } from "prop-types";

const MAX_CHARACTERS_DESC = 256;

const validateLongitude = (longitude: string) => {
  return (
    longitude.length &&
    parseFloat(longitude) <= 180 &&
    parseFloat(longitude) >= -180
  );
};

const validateLatitude = (latitude: string) => {
  return (
    latitude.length && parseFloat(latitude) <= 90 && parseFloat(latitude) >= -90
  );
};

const validatePointType = (pointType: PointType | "") => {
  return pointTypes.find((type) => type === pointType);
};

const validateDescription = (desc: string) => {
  return desc.length > 0 && desc.length <= MAX_CHARACTERS_DESC;
};

const validatePrice = (price: string) => {
  return parseFloat(price) >= 0 && parseFloat(price) % 1 === 0;
};

export const AddPointSidebar = ({
  isSidebarOpen,
  closeSidebar,
}: {
  isSidebarOpen: boolean;
  closeSidebar: () => void;
}) => {
  const [isMapPinToggled, setIsMapPinToggled] = useState<boolean>(false);
  const [newPoint, setNewPoint] = useState<Partial<Point>>({});
  const setLongitude = (longitude: Point["longitude"] | undefined) =>
    setNewPoint({ ...newPoint, longitude });
  const setLatitude = (latitude: Point["latitude"] | undefined) =>
    setNewPoint({ ...newPoint, latitude });
  const setDescription = (description: Point["description"]) =>
    setNewPoint({ ...newPoint, description });
  const setPointType = (pointType: Point["pointType"]) =>
    setNewPoint({ ...newPoint, pointType });
  const setPrice = (price: Point["price"] | undefined) => {
    setNewPoint({ ...newPoint, price });
  };

  const handleCloseSidebar = () => {
    closeSidebar();
    setNewPoint({});
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // const point: Point = {
    //   longitude: newPoint.longitude,
    //   latitude: newPoint.latitude,
    //   description: newPoint.description,
    //   pointType: newPoint.pointType,
    //   price: newPoint.price,
    // };
    // createPoint(point);
    handleCloseSidebar();
  };

  const validateForm = () => {
    return (
      (newPoint.longitude || newPoint.longitude === 0) &&
      newPoint.longitude <= 180 &&
      newPoint.longitude >= -180 &&
      (newPoint.latitude || newPoint.latitude === 0) &&
      newPoint.latitude <= 90 &&
      newPoint.latitude >= -90 &&
      newPoint.description?.length &&
      newPoint.description.length <= MAX_CHARACTERS_DESC &&
      pointTypes.find((pointType) => pointType === newPoint.pointType) &&
      (newPoint.pointType === "אטרקציה"
        ? newPoint?.price || newPoint.price === 0
        : true)
    );
  };

  useMapEvents({
    async click(e) {
      if (isMapPinToggled) {
        await setLatitude(Number(e.latlng.lat.toFixed(6)));
        await setLongitude(
          Number(((((e.latlng.lng % 360) + 540) % 360) - 180).toFixed(6))
        );
        setIsMapPinToggled(false);
      }
    },
  });

  return (
    <Drawer open={isSidebarOpen} anchor="right" variant="persistent">
      <SidebarHeader
        closeSidebar={handleCloseSidebar}
        closeButtonTitle="סגור הוספת נקודה"
        headerTitle="הוספת נקודה חדשה"
      />
      <DividerLine />
      <FullHeightForm onSubmit={(e) => handleSubmit(e)}>
        <FullHeightFormControl>
          <CoordsSpan>
            <CoordsInputFields>
              <CoordsInputField
                id="longitude"
                type="number"
                label="מיקום X"
                autoComplete="off"
                value={newPoint.longitude}
                onChange={(e) =>
                  setLongitude(
                    e.target.value ? Number(e.target.value) : undefined
                  )
                }
              ></CoordsInputField>
              <CoordsInputField
                id="latitude"
                type="number"
                label="מיקום Y"
                autoComplete="off"
                value={newPoint.latitude}
                onChange={(e) =>
                  setLatitude(
                    e.target.value ? Number(e.target.value) : undefined
                  )
                }
              ></CoordsInputField>
            </CoordsInputFields>
            <LocationButton
              onClick={() => setIsMapPinToggled(true)}
              title="בחר נקודה על המפה"
            >
              <AddLocationAltIcon />
            </LocationButton>
          </CoordsSpan>
          <InputField
            id="description"
            label="תיאור הנקודה"
            autoComplete="off"
            value={newPoint.description}
            onChange={(e) =>
              e.target.value.length < MAX_CHARACTERS_DESC &&
              setDescription(e.target.value)
            }
            multiline
          ></InputField>
          <SelectField fullWidth>
            <InputLabel id="point-type-label">סוג הנקודה</InputLabel>
            <Select
              label="סוג הנקודה"
              labelId="point-type-label"
              id="point-type"
              value={newPoint.pointType || ""}
              onChange={(e) => setPointType(e.target.value as PointType)}
              sx={{
                "& .MuiSvgIcon-root": {
                  right: "unset",
                  left: "7px",
                },
              }}
            >
              {pointTypes.map((type, index) => (
                <SelectItem value={type} key={index}>
                  {type}
                </SelectItem>
              ))}
            </Select>
          </SelectField>
          {newPoint.pointType === "אטרקציה" && (
            <InputField
              type="number"
              id="price"
              label="מחיר"
              autoComplete="off"
              value={newPoint.price}
              onChange={(e) =>
                setPrice(e.target.value ? Number(e.target.value) : undefined)
              }
            ></InputField>
          )}

          <SaveButton type="submit" disabled={!validateForm()}>
            שמור&nbsp;
            <SaveIcon />
          </SaveButton>
        </FullHeightFormControl>
      </FullHeightForm>
    </Drawer>
  );
};
