import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {},
  hoverBackground: {
    "&:active": {
      backgroundColor: "#ddd",
    },
  },
  noOutline: {
    "&:focus": {
      border: "none",
      outline: "none",
    },
  },
});

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
    backgroundColor: "#ddd",
  },
  "&:focus": {
    border: "none",
    outline: "none",
  },
});

export const AddPointButton = () => {
  const classes = useStyles();
  return (
    <NewPointButton variant="text" className={classes.hoverBackground}>
      +
    </NewPointButton>
  );
};
