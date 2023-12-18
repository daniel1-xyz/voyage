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
  setIsSidebarOpen,
}: {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [pointType, setPointType] = useState<PointType | "">("");
  const [coords, setCoords] = useState(["", ""]);
  const [isMapPinToggled, setIsMapPinToggled] = useState(false);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    setPointType("");
    setCoords(["", ""]);
    setIsMapPinToggled(false);
    setDescription("");
    setPrice("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const point: Point = {
      longitude: parseFloat(coords[0]),
      latitude: parseFloat(coords[1]),
      description: description,
      pointType: pointType,
      price: parseInt(price),
    };
    createPoint(point);
    closeSidebar();
  };

  const validateForm = () => {
    return (
      validateLongitude(coords[0]) &&
      validateLatitude(coords[1]) &&
      validateDescription(description) &&
      validatePointType(pointType) &&
      (pointType !== "אטרקציה" || validatePrice(price))
    );
  };

  const changePointType = (e: SelectChangeEvent) => {
    setPointType(e.target.value as PointType);
  };

  const changeLatCoords = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setCoords([coords[0], e.target.value]);
  };

  const changeLonCoords = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setCoords([e.target.value, coords[1]]);
  };

  const changeDescription = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const desc = e.target.value;
    desc.length < MAX_CHARACTERS_DESC && setDescription(desc);
  };

  const changePrice = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPrice(e.target.value);
  };

  useMapEvents({
    click(e) {
      if (isMapPinToggled) {
        setCoords([
          ((((e.latlng.lng % 360) + 540) % 360) - 180).toFixed(6),
          e.latlng.lat.toFixed(6),
        ]);
        setIsMapPinToggled(false);
      }
    },
  });

  return (
    <Drawer open={isSidebarOpen} anchor="right" variant="persistent">
      <SidebarHeader
        closeSidebar={closeSidebar}
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
                value={coords[0]}
                onChange={(e) => changeLonCoords(e)}
              ></CoordsInputField>
              <CoordsInputField
                id="latitude"
                type="number"
                label="מיקום Y"
                autoComplete="off"
                value={coords[1]}
                onChange={(e) => changeLatCoords(e)}
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
            value={description}
            onChange={(e) => changeDescription(e)}
            multiline
          ></InputField>
          <SelectField fullWidth>
            <InputLabel id="point-type-label">סוג הנקודה</InputLabel>
            <Select
              label="סוג הנקודה"
              labelId="point-type-label"
              id="point-type"
              value={pointType}
              onChange={changePointType}
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
          {pointType === "אטרקציה" && (
            <InputField
              type="number"
              id="price"
              label="מחיר"
              autoComplete="off"
              value={price}
              onChange={(e) => changePrice(e)}
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
