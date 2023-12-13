import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import { MenuItem, Select, Typography, styled } from "@mui/material";

const validateForm = () => {};

const InputField = styled(TextField)({
  marginBlock: "0.5vh",
  marginInline: "2vh",
  direction: "inherit",
  textAlign: "start",
  width: "20rem",
});

const SelectField = styled(Select)({
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
  top: "0",
  left: "0",
});

const SidebarHeader = styled("div")({
  textAlign: "center",
});

const SidebarTitle = styled(Typography)({
  width: "100%",
  marginBlock: "1vh",
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
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <Drawer open={isSidebarOpen} anchor="right">
      <SidebarHeader>
        <CloseButton onClick={() => closeSidebar()} title="סגור הוספת נקודה">
          <CloseIcon />
        </CloseButton>
        <SidebarTitle variant="h6">
          <strong>הוספת נקודה חדשה</strong>
        </SidebarTitle>
      </SidebarHeader>
      <DividerLine />
      <InputField
        id="outlined-basic"
        label="מיקום X"
        autoComplete="off"
      ></InputField>
      <InputField
        id="outlined-basic"
        label="מיקום Y"
        autoComplete="off"
      ></InputField>
      <InputField
        id="outlined-basic"
        label="תיאור הנקודה"
        autoComplete="off"
      ></InputField>
      <SelectField>
        <SelectItem>מסלול טיול</SelectItem>
        <SelectItem>אטרקציה</SelectItem>
        <SelectItem>תצפית נוף</SelectItem>
      </SelectField>
    </Drawer>
  );
};
