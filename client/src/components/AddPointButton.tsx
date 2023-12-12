import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const NewPointButton = styled(Button)({
  position: "absolute",
  bottom: "1%",
  left: "1%",
  height: "5rem",
  width: "5rem",
  fontSize: "2rem",
  zIndex: 1000,
  borderRadius: "100%",
  backgroundColor: "#fff",
  color: "#000",
});

export const AddPointButton = () => {
  return <NewPointButton variant="text">+</NewPointButton>;
};
