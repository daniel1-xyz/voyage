import { useCallback, useState } from "react";
import Drawer from "@mui/material/Drawer";
import SaveIcon from "@mui/icons-material/Save";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import { Select, InputLabel } from "@mui/material";
import { useMapEvents } from "react-leaflet";
import { PointType, pointTypes } from "../../types/pointTypes";
import { MapPoint } from "../../types/point";
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

const MAX_CHARACTERS_DESC = 256;

export const AddPointSidebar = ({
  isSidebarOpen,
  closeSidebar,
}: {
  isSidebarOpen: boolean;
  closeSidebar: () => void;
}) => {
  const [isMapPinToggled, setIsMapPinToggled] = useState<boolean>(false);
  const [newPoint, setNewPoint] = useState<Partial<MapPoint>>({});

  const setLongitude = (longitude: MapPoint["longitude"] | undefined) =>
    setNewPoint((prev) => ({ ...prev, longitude }));

  const setLatitude = (latitude: MapPoint["latitude"] | undefined) =>
    setNewPoint((prev) => ({ ...prev, latitude }));

  const setDescription = (description: MapPoint["description"]) =>
    setNewPoint((prev) => ({ ...prev, description }));

  const setPointType = (pointType: MapPoint["pointType"]) =>
    setNewPoint((prev) => ({ ...prev, pointType }));

  const setPrice = (price: MapPoint["price"] | undefined) =>
    setNewPoint((prev) => ({ ...prev, price }));

  const handleCloseSidebar = () => {
    closeSidebar();
    setNewPoint({});
  };

  const handleSubmit = () => {
    if (isPointValid(newPoint)) {
      createPoint(newPoint);
      handleCloseSidebar();
    }
  };

  const isPointValid = useCallback(
    (point: Partial<MapPoint>): point is MapPoint => {
      const { latitude, longitude, description, pointType, price } = point;

      const isCoordsValid =
        (longitude || longitude === 0) &&
        longitude <= 180 &&
        longitude >= -180 &&
        (latitude || latitude === 0) &&
        latitude <= 90 &&
        latitude >= -90;

      const isDescriptionValid =
        description?.length && description.length <= MAX_CHARACTERS_DESC;

      const isPointTypeValid = pointType;

      const isPriceValid =
        pointType !== "אטרקציה" ||
        (price && price > 0 && price % 1 === 0) ||
        price === 0;

      return !!(
        isCoordsValid &&
        isDescriptionValid &&
        isPointTypeValid &&
        isPriceValid
      );
    },
    []
  );

  useMapEvents({
    click(e) {
      if (isMapPinToggled) {
        const coords = {
          lat: Number(e.latlng.lat.toFixed(6)),
          long: Number(((((e.latlng.lng % 360) + 540) % 360) - 180).toFixed(6)),
        };

        setLatitude(coords.lat);
        setLongitude(coords.long);
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
      <FullHeightForm
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <FullHeightFormControl>
          <CoordsSpan>
            <CoordsInputFields>
              <CoordsInputField
                id="longitude"
                type="number"
                label="מיקום X"
                autoComplete="off"
                value={
                  newPoint.longitude !== undefined ? newPoint.longitude : ""
                }
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
                value={newPoint.latitude !== undefined ? newPoint.latitude : ""}
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
            value={newPoint?.description || ""}
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
              value={newPoint?.pointType || ""}
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
              value={newPoint?.price !== undefined ? newPoint.price : ""}
              onChange={(e) =>
                setPrice(e.target.value ? Number(e.target.value) : undefined)
              }
            ></InputField>
          )}

          <SaveButton type="submit" disabled={!isPointValid(newPoint)}>
            שמור&nbsp;
            <SaveIcon />
          </SaveButton>
        </FullHeightFormControl>
      </FullHeightForm>
    </Drawer>
  );
};
