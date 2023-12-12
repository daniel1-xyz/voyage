import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const NewPointButton = styled(Button)({
  position: "absolute",
  bottom: 0,
  left: 0,
  zIndex: 1,
});

export const AddPointButton = () => {
  return <Button></Button>;
};
