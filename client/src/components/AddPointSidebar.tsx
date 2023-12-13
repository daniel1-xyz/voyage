import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

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
      <Button onClick={() => closeSidebar()} title="סגור הוספת נקודה">
        <CloseIcon />
      </Button>
      <Divider />
      <TextField id="outlined-basic" label="מיקום X"></TextField>
    </Drawer>
  );
};
