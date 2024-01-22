import { Divider, IconButton, TextField, styled } from "@mui/material";

export const FilterSearchBarWrapper = styled("div")({
  position: "absolute",
  top: "1rem",
  right: "1rem",
  direction: "rtl",
  backgroundColor: "#fff",
  zIndex: "1000",
  borderRadius: "2rem",
  width: "24rem",
  paddingInline: "0.5rem",
  border: "none",
  display: "flex",
});

export const SearchFilterField = styled(TextField)({
  width: "100%",
  "& fieldset": {
    border: "none",
  },
});

export const FullHeightDivider = styled(Divider)({
  height: "auto",
  marginInline: "0.25rem",
});

export const FilterButton = styled(IconButton)({
  height: "2rem",
  width: "2rem",
  marginBlock: "auto",
  "&:hover": {
    backgroundColor: "#eee",
  },
  "&:focus": {
    border: "none",
    outline: "none",
  },
});
