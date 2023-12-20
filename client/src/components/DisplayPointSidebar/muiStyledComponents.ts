import { Button, Divider, styled, Rating } from "@mui/material";

export const DividerLine = styled(Divider)({
  marginBottom: "1rem",
});

export const Section = styled("div")({
  fontFamily: "calibri",
  textAlign: "start",
  fontSize: "1.2rem",
  width: "20rem",
  marginInline: "2rem",
  marginBlock: "1rem",
});

export const Paragraph = styled("p")({
  marginBlock: "0.25rem !important",
});

export const AddRatingButton = styled(Button)({
  color: "#666",
  border: "1px solid #666",
  fontSize: "1rem",
  paddingInline: "2rem",
  borderRadius: "2rem",
  marginRight: "20%",
  display: "inline-block",
  "&:focus": {
    borderColor: "#666",
    outline: "none",
  },
  "&:hover": {
    backgroundColor: "transparent",
    borderColor: "#666",
  },
});

export const CenteredRating = styled(Rating)({
  display: "flex",
  width: "fit-content",
  margin: "0 auto",
});
