import { Typography, Button, styled } from "@mui/material";

export const SidebarHeaderWrapper = styled("div")({
  textAlign: "center",
  direction: "inherit",
});

export const SidebarTitle = styled(Typography)({
  width: "100%",
  marginBlock: "1.25rem",
  fontFamily: "calibri",
});

export const CloseButton = styled(Button)({
  position: "absolute",
  top: "1.25rem",
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
