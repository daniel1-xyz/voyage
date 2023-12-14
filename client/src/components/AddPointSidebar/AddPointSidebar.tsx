import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import SaveIcon from "@mui/icons-material/Save";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import { Select, SelectChangeEvent, InputLabel } from "@mui/material";
import {
  SidebarHeader,
  CloseButton,
  SidebarTitle,
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
} from "./muiStyledComponents";
import { useMapEvents } from "react-leaflet";

const validateForm = () => {
  return true;
};

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

export const AddPointSidebar = ({
  isSidebarOpen,
  setIsSidebarOpen,
}: {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [pointType, setPointType] = useState("");
  const [coords, setCoords] = useState(["", ""]);
  const [isMapPinToggled, setIsMapPinToggled] = useState(false);

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const changePointType = (e: SelectChangeEvent) => {
    setPointType(e.target.value as string);
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
    <Drawer open={isSidebarOpen} anchor="right" dir="rtl" variant="persistent">
      <SidebarHeader>
        <CloseButton onClick={() => closeSidebar()} title="סגור הוספת נקודה">
          <CloseIcon />
        </CloseButton>
        <SidebarTitle variant="h5">
          <strong>הוספת נקודה חדשה</strong>
        </SidebarTitle>
      </SidebarHeader>
      <DividerLine />
      <FullHeightForm onSubmit={(e) => e.preventDefault}>
        <CoordsSpan>
          <CoordsInputFields>
            <CoordsInputField
              id="longitude"
              type="number"
              label="מיקום X"
              autoComplete="off"
              value={coords[0]}
              onChange={(e) => changeLonCoords(e)}
              error={!validateLongitude(coords[0])}
            ></CoordsInputField>
            <CoordsInputField
              id="latitude"
              type="number"
              label="מיקום Y"
              autoComplete="off"
              value={coords[1]}
              onChange={(e) => changeLatCoords(e)}
              error={!validateLatitude(coords[1])}
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
            <SelectItem value="מסלול טיול">מסלול טיול</SelectItem>
            <SelectItem value="אטרקציה">אטרקציה</SelectItem>
            <SelectItem value="תצפית נוף">תצפית נוף</SelectItem>
          </Select>
        </SelectField>
        {pointType === "אטרקציה" && (
          <InputField
            type="number"
            id="price"
            label="מחיר"
            autoComplete="off"
          ></InputField>
        )}

        <SaveButton type="submit" disabled={validateForm()}>
          שמור&nbsp;
          <SaveIcon />
        </SaveButton>
      </FullHeightForm>
    </Drawer>
  );
};
