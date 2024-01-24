import {
  Divider,
  FormControl,
  IconButton,
  MenuItem,
  TextField,
  styled,
} from "@mui/material";

export const FilterSearchBarWrapper = styled("div")({
  position: "absolute",
  top: "1rem",
  right: "1rem",
  zIndex: "1000",
  backgroundColor: "#fff",
  borderRadius: "2rem",
  width: "30rem",
  direction: "rtl",
});

export const FilterSearchRow = styled("span")({
  direction: "inherit",
  paddingInline: "0.5rem",
  border: "none",
  display: "flex",
});

export const SearchFilterField = styled(TextField)({
  width: "100%",
  "& fieldset": {
    border: "none",
  },
  "& input": {
    color: "#000",
    fontFamily: "calibri",
    fontSize: "1.125rem",
    "::placeholder": {
      opacity: "50%",
    },
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

export const FilterSection = styled("div")({
  display: "flex",
  alignItems: "center",
  fontSize: "1.125rem",
  fontFamily: "calibri",
  width: "90%",
  marginInline: "auto",
});

export const FilterSectionTitle = styled("strong")({
  width: "25%",
  textAlign: "start",
});

export const FilterSelectField = styled(FormControl)({
  direction: "inherit",
  width: "12rem",
  marginBlock: "0.4rem",
  marginInline: "1rem",
  textAlign: "start",
  "& legend": {
    textAlign: "start",
  },
  "& label": {
    transformOrigin: "right !important",
    left: "inherit !important",
    right: "1.75rem !important",
  },
});

export const PriceInputField = styled(TextField)({
  marginBlock: "0.4rem",
  marginInline: "1rem",
  direction: "inherit",
  textAlign: "start",
  width: "5rem",
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

export const RatingInputField = styled(TextField)({
  marginBlock: "0.4rem",
  marginInline: "1rem",
  direction: "inherit",
  textAlign: "start",
  width: "12rem",
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

export const SelectItem = styled(MenuItem)({
  backgroundColor: "#fff !important",
  direction: "rtl",
});

// TODO: Find a better name
export const FinalButton = styled(IconButton)({
  border: "none",
  direction: "inherit",
  fontFamily: "inherit",
  fontSize: "inherit",
  "&:focus": {
    outline: "none",
  },
  "&:hover": {
    backgroundColor: "transparent",
    borderColor: "initial",
  },
});
