import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import { MenuItem, styled, FormControl } from "@mui/material";

export const InputField = styled(TextField)({
  marginBlock: "0.4rem",
  marginInline: "2rem",
  direction: "inherit",
  textAlign: "start",
  width: "20rem",
  "& legend": {
    textAlign: "start",
  },
  "& label": {
    transformOrigin: "right !important",
    left: "inherit !important",
    right: "1.75rem !important",
  },
  "input::-webkit-outer-spin-button, input::-webkit-inner-spin-button": {
    WebkitAppearance: "none",
    margin: 0,
  },
  "input[type=number]": {
    MozAppearance: "textfield",
  },
});

export const SelectField = styled(FormControl)({
  marginBlock: "0.4rem",
  marginInline: "2rem",
  direction: "inherit",
  textAlign: "start",
  width: "20rem",
  "& legend": {
    textAlign: "start",
  },
  "& label": {
    transformOrigin: "right !important",
    left: "inherit !important",
    right: "1.75rem !important",
  },
});

export const FullHeightForm = styled("form")({
  height: "100%",
});

export const FullHeightFormControl = styled(FormControl)({
  height: "100%",
});

export const CoordsSpan = styled("span")({
  marginInline: "2rem",
  display: "flex",
  alignItems: "center",
  direction: "inherit",
});

export const CoordsInputFields = styled("div")({
  width: "16rem",
  height: "100%",
});

export const CoordsInputField = styled(TextField)({
  width: "100%",
  marginBlock: "0.4rem",
  "& legend": {
    textAlign: "start",
  },
  "& label": {
    transformOrigin: "right !important",
    left: "inherit !important",
    right: "1.75rem !important",
  },
  "input::-webkit-outer-spin-button, input::-webkit-inner-spin-button": {
    WebkitAppearance: "none",
    margin: 0,
  },
  "input[type=number]": {
    MozAppearance: "textfield",
  },
});

export const DividerLine = styled(Divider)({
  marginBottom: "1rem",
});

export const LocationButton = styled(Button)({
  borderRadius: "100%",
  height: "4rem",
  width: "4rem",
  color: "#888",
  "&:focus": {
    border: "none",
    outline: "none",
  },
  "&:hover": {
    backgroundColor: "transparent",
  },
});

export const SaveButton = styled(Button)({
  fontSize: "1.25rem",
  border: "1px solid",
  position: "absolute",
  bottom: "10%",
  left: "50%",
  direction: "inherit",
  transform: "translate(-50%, -50%)",
  "&:focus": {
    outline: "none",
  },
  "&:hover": {
    backgroundColor: "transparent",
  },
});

export const SelectItem = styled(MenuItem)({
  backgroundColor: "#fff !important",
  direction: "rtl",
});
