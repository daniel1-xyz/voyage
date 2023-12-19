import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AddIcon from "@mui/icons-material/Add";

const useStyles = makeStyles({
  addButton: {
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
  },
});

export const AddPointButton = ({
  openAddSidebar,
}: {
  openAddSidebar: () => void;
}) => {
  const classes = useStyles();
  return (
    <Button
      variant="text"
      title="הוספת נקודה חדשה"
      onClick={openAddSidebar}
      className={classes.addButton}
    >
      <AddIcon />
    </Button>
  );
};
