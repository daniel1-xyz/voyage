import FilterAltIcon from "@mui/icons-material/FilterAlt";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import {
  FilterButton,
  FilterSearchRow,
  SearchFilterField,
  FullHeightDivider,
  FilterSearchBarWrapper,
  FilterSelectField,
  SelectItem,
  FilterSection,
  SmallInputField,
  FinalButton,
} from "./muiStyledComponents";
import { Collapse, InputLabel, Select } from "@mui/material";
import { pointTypes } from "../../types/pointTypes";
import { useState } from "react";
import { FilterPreferences } from "../../types/filterPreferences";

export const FilterSearchBar = () => {
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState<boolean>(false);
  const [filterPreferences, setFilterPreferences] = useState<
    Partial<FilterPreferences>
  >({});
  const setPointType = (pointType: string) => {
    setFilterPreferences((prevState) => ({ ...prevState, pointType }));
  };

  const closeMenu = () => {
    setIsFilterMenuOpen(false);
  };

  const openMenu = () => {
    setIsFilterMenuOpen(true);
  };

  const handlePreferences = () => {};

  const validatePreferences = (): boolean => {
    return false;
  };

  return (
    <FilterSearchBarWrapper>
      <FilterSearchRow>
        <SearchFilterField placeholder="חפש נקודה על המפה" />
        <FullHeightDivider orientation="vertical" />
        <FilterButton onClick={openMenu}>
          <FilterAltIcon />
        </FilterButton>
      </FilterSearchRow>
      <Collapse in={isFilterMenuOpen}>
        <FilterSection>
          <strong>סוג הנקודה:</strong>
          <FilterSelectField>
            <InputLabel id="point-type-label-filter">סוג הנקודה</InputLabel>
            <Select
              label="סוג הנקודה"
              labelId="point-type-label-filter"
              id="point-type-filter"
              value={filterPreferences?.pointType || ""}
              onChange={(e) => setPointType(e.target.value)}
              sx={{
                "& .MuiSvgIcon-root": {
                  right: "unset",
                  left: "7px",
                },
              }}
            >
              {pointTypes.map((type, index) => (
                <SelectItem value={type} key={index}>
                  {type}
                </SelectItem>
              ))}
              <SelectItem value="כל סוג נקודה">כל סוג נקודה</SelectItem>
            </Select>
          </FilterSelectField>
        </FilterSection>
        <FilterSection>
          <strong>מחיר:</strong>
          <SmallInputField
            type="number"
            id="filter-min-price"
            label="מינ'"
          ></SmallInputField>
          {" - "}
          <SmallInputField
            type="number"
            id="filter-max-price"
            label="מקס'"
          ></SmallInputField>
        </FilterSection>
        <FilterSection>
          <strong>דירוג:</strong>
          <SmallInputField
            type="number"
            id="filter-min-rating"
            label="מינ'"
          ></SmallInputField>
        </FilterSection>
        <FilterSection>
          <FinalButton color="success" disabled={!validatePreferences()}>
            <CheckCircleOutlineOutlinedIcon
              fontSize="large"
              onClick={handlePreferences}
            />
          </FinalButton>
          <FinalButton color="error" onClick={closeMenu}>
            <CancelOutlinedIcon fontSize="large" />
          </FinalButton>
        </FilterSection>
      </Collapse>
    </FilterSearchBarWrapper>
  );
};
