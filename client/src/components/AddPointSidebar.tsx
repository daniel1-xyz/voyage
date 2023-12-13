import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import SaveIcon from "@mui/icons-material/Save";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import {
  MenuItem,
  Select,
  Typography,
  styled,
  InputLabel,
  FormControl,
  SelectChangeEvent,
} from "@mui/material";

const InputField = styled(TextField)({
  marginBlock: "0.5vh",
  marginInline: "2vh",
  direction: "inherit",
  textAlign: "start",
  width: "20rem",
});

const SelectField = styled(FormControl)({
  marginBlock: "0.5vh",
  marginInline: "2vh",
  direction: "inherit",
  textAlign: "start",
  width: "20rem",
});

const FullHeightForm = styled(FormControl)({
  height: "100%",
});

const CoordsSpan = styled("span")({
  marginInline: "2vh",
  display: "flex",
  alignItems: "center",
  direction: "inherit",
});

const CoordsInputFields = styled("div")({
  width: "16rem",
  height: "100%",
});

const CoordsInputField = styled(TextField)({
  width: "100%",
  marginBlock: "0.5vh",
  "& legend": {
    textAlign: "start",
  },
  "& label": {
    transformOrigin: "right !important",
    left: "inherit !important",
    right: "1.75rem !important",
  },
});

const DividerLine = styled(Divider)({
  marginBottom: "1vh",
});

const CloseButton = styled(Button)({
  position: "absolute",
  top: "1.5vh",
  left: "0",
  color: "#888",
  "&:focus": {
    border: "none",
    outline: "none",
  },
  "&:hover": {
    backgroundColor: "transparent",
  },
});

const LocationButton = styled(Button)({
  borderRadius: "100%",
  height: "4rem",
  width: "4rem",
  color: "#888",
  "&:focus": {
    border: "none",
    outline: "none",
  },
  "&:hover": {
    backgroundColor: "transparent",
  },
});

const SaveButton = styled(Button)({
  // TODO: add gray color if disabled
  fontSize: "1.25rem",
  border: "1px solid",
  position: "absolute",
  bottom: "10%",
  left: "50%",
  direction: "inherit",
  transform: "translate(-50%, -50%)",
  "&:focus": {
    outline: "none",
  },
  "&:hover": {
    backgroundColor: "transparent",
  },
});

const SidebarHeader = styled("div")({
  textAlign: "center",
  direction: "inherit",
});

const SidebarTitle = styled(Typography)({
  width: "100%",
  marginBlock: "1.5vh",
  fontFamily: "calibri",
});

const SelectItem = styled(MenuItem)({
  backgroundColor: "#fff !important",
  direction: "rtl",
});

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

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const changePointType = (e: SelectChangeEvent) => {
    setPointType(e.target.value as string);
  };

  return (
    <Drawer open={isSidebarOpen} anchor="right" dir="rtl">
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
            ></CoordsInputField>
            <CoordsInputField
              id="latitude"
              label="מיקום Y"
              autoComplete="off"
            ></CoordsInputField>
          </CoordsInputFields>
          <LocationButton>
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
            labelId="point-type-label"
            id="point-type"
            value={pointType}
            onChange={changePointType}
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
