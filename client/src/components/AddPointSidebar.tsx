import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
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

const validateForm = () => {};

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

const SidebarHeader = styled("div")({
  textAlign: "center",
  direction: "rtl",
});

const SidebarTitle = styled(Typography)({
  width: "100%",
  marginBlock: "1.5vh",
  fontFamily: "calibri",
});

const SelectItem = styled(MenuItem)({
  backgroundColor: "#fff !important",
});

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
    <Drawer open={isSidebarOpen} anchor="right">
      <SidebarHeader>
        <CloseButton onClick={() => closeSidebar()} title="סגור הוספת נקודה">
          <CloseIcon />
        </CloseButton>
        <SidebarTitle variant="h5">
          <strong>הוספת נקודה חדשה</strong>
        </SidebarTitle>
      </SidebarHeader>
      <DividerLine />
      <InputField label="מיקום X" autoComplete="off"></InputField>
      <InputField label="מיקום Y" autoComplete="off"></InputField>
      <InputField label="תיאור הנקודה" autoComplete="off"></InputField>
      <SelectField fullWidth>
        <InputLabel id="point-type">סוג הנקודה</InputLabel>
        <Select
          labelId="point-type"
          value={pointType}
          onChange={changePointType}
        >
          <SelectItem value="מסלול טיול">מסלול טיול</SelectItem>
          <SelectItem value="אטרקציה">אטרקציה</SelectItem>
          <SelectItem value="תצפית נוף">תצפית נוף</SelectItem>
        </Select>
      </SelectField>
      {pointType === "אטרקציה" && (
        <InputField label="מחיר" autoComplete="off"></InputField>
      )}
    </Drawer>
  );
};
