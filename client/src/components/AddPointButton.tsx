import { IconButton, styled } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const AddButton = styled(IconButton)({
  position: "absolute",
  bottom: "1%",
  left: "1%",
  height: "5rem",
  width: "5rem",
  fontSize: "3rem",
  zIndex: 1000,
  borderRadius: "100%",
  backgroundColor: "#fff",
  color: "#000",
  "&:hover": {
    backgroundColor: "#eee",
  },
  "&:focus": {
    border: "none",
    outline: "none",
  },
});

const LargerAddIcon = styled(AddIcon)({
  height: "2.5rem",
  width: "2.5rem",
});

export const AddPointButton = ({
  openAddSidebar,
}: {
  openAddSidebar: () => void;
}) => {
  return (
    <AddButton title="הוספת נקודה חדשה" onClick={openAddSidebar}>
      <LargerAddIcon />
    </AddButton>
  );
};
