import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const NewPointButton = styled(Button)({
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

export const AddPointButton = ({
  openAddSidebar,
}: {
  openAddSidebar: () => void;
}) => {
  return (
    <NewPointButton
      variant="text"
      title="הוספת נקודה חדשה"
      onClick={openAddSidebar}
    >
      +
    </NewPointButton>
  );
};
