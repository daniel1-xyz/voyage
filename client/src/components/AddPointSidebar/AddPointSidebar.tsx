import { useState, useEffect } from "react";
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
import { useMap, useMapEvents } from "react-leaflet";

const validateForm = () => {
  return true;
};

const validateLongitude = (e: SelectChangeEvent) => {
  const input = e.target.value;

  if (!input.length || parseFloat(input) > 180 || parseFloat(input) < -180) {
    return false;
  }

  const regExp = new RegExp("^-?d*.?d+$");

  return regExp.test(input) || false;
};

const validateLatitude = (e: SelectChangeEvent) => {
  const input = e.target.value;

  if (!input.length || parseFloat(input) > 90 || parseFloat(input) < -90) {
    return false;
  }

  const regExp = new RegExp("^-?d*.?d+$");

  return regExp.test(input) || false;
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

  const choosePointOnMap = () => {
    /*console.log("hi");
    useMapEvents({
      click(e) {
        alert("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng);
        setCoords([String(e.latlng.lng), String(e.latlng.lat)]);
      },
    });*/
  };

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
              label="מיקום X"
              autoComplete="off"
              value={coords[0]}
              onChange={(e) => changeLonCoords(e)}
            ></CoordsInputField>
            <CoordsInputField
              id="latitude"
              label="מיקום Y"
              autoComplete="off"
              value={coords[1]}
              onChange={(e) => changeLatCoords(e)}
            ></CoordsInputField>
          </CoordsInputFields>
          <LocationButton
            onClick={() => choosePointOnMap()}
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
          <InputField id="price" label="מחיר" autoComplete="off"></InputField>
        )}

        <SaveButton type="submit" disabled={validateForm()}>
          שמור&nbsp;
          <SaveIcon />
        </SaveButton>
      </FullHeightForm>
    </Drawer>
  );
};
