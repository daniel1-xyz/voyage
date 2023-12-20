import { Typography, IconButton, styled } from "@mui/material";

export const SidebarHeaderWrapper = styled("span")({
  direction: "inherit",
  marginBlock: "1.25rem",
  display: "flex",
});

export const SidebarTitle = styled(Typography)({
  width: "100%",
  justifyContent: "center",
  fontFamily: "calibri",
});

export const CloseButton = styled(IconButton)({
  color: "#888",
  paddingBlock: "0",
  height: "100% !important",
  "&:focus": {
    border: "none",
    outline: "none",
  },
  "&:hover": {
    backgroundColor: "transparent",
  },
});
