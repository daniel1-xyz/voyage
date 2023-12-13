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
  setIsSidebarOpen,
}: {
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  return (
    <NewPointButton variant="text" onClick={() => openSidebar()}>
      +
    </NewPointButton>
  );
};
