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
  FilterSectionTitle,
  SelectItem,
  FilterSection,
  PriceInputField,
  RatingInputField,
  FinalButton,
} from "./muiStyledComponents";
import { Collapse, InputLabel, Select } from "@mui/material";
import { pointTypes } from "../../types/pointTypes";
import { useEffect, useState } from "react";
import { FilterPreferences } from "../../types/filterPreferences";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { setFilteredPointsToDisplay } from "../../redux/actions/filteredPointsToDisplay";

export const FilterSearchBar = () => {
  const dispatch = useDispatch<AppDispatch>();

  const pointsToDisplay = useSelector(
    (state: RootState) => state.pointsToDisplay.pointsToDisplay
  );

  const [searchText, setSearchText] = useState<string>("");
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState<boolean>(false);
  const [filterPreferences, setFilterPreferences] = useState<
    Partial<FilterPreferences>
  >({});

  const setPointType = (pointType: string) => {
    setFilterPreferences((prevState) => ({ ...prevState, pointType }));
  };
  const setMinPrice = (minPrice: number) => {
    setFilterPreferences((prevState) => ({ ...prevState, minPrice }));
  };
  const setMaxPrice = (maxPrice: number) => {
    setFilterPreferences((prevState) => ({ ...prevState, maxPrice }));
  };
  const setMinRating = (minRating: number) => {
    setFilterPreferences((prevState) => ({ ...prevState, minRating }));
  };

  const isPriceOptionAllowed = (): boolean => {
    return (
      filterPreferences.pointType === "אטרקציה" ||
      filterPreferences.pointType === "כל סוג נקודה"
    );
  };

  useEffect(() => {
    dispatch(setFilteredPointsToDisplay(pointsToDisplay));
  }, [dispatch]);

  const handleCloseMenu = () => {
    setIsFilterMenuOpen(false);
    setFilterPreferences({});
  };

  const openMenu = () => {
    setIsFilterMenuOpen(true);
  };

  const handleSearchTextChange = (newText: string) => {
    setSearchText(newText);
    const newFilteredPointsToDisplay = pointsToDisplay.filter(
      (pointToDisplay) => pointToDisplay.description.includes(newText)
    );
    dispatch(setFilteredPointsToDisplay(newFilteredPointsToDisplay));
  };

  const handlePreferences = () => {};

  const validatePreferences = (): boolean => {
    return false;
  };

  return (
    <FilterSearchBarWrapper>
      <FilterSearchRow>
        <SearchFilterField
          placeholder="חפש נקודה על המפה"
          value={searchText}
          onChange={(e) => handleSearchTextChange(e.target.value)}
        />
        <FullHeightDivider orientation="vertical" />
        <FilterButton onClick={openMenu}>
          <FilterAltIcon />
        </FilterButton>
      </FilterSearchRow>
      <Collapse in={isFilterMenuOpen}>
        <FilterSection>
          <FilterSectionTitle>סוג הנקודה:</FilterSectionTitle>
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
        {isPriceOptionAllowed() && (
          <FilterSection>
            <FilterSectionTitle>מחיר:</FilterSectionTitle>
            <PriceInputField
              type="number"
              id="filter-min-price"
              label="מינ'"
            ></PriceInputField>
            <PriceInputField
              type="number"
              id="filter-max-price"
              label="מקס'"
            ></PriceInputField>
          </FilterSection>
        )}
        <FilterSection>
          <FilterSectionTitle>דירוג:</FilterSectionTitle>
          <RatingInputField
            type="number"
            id="filter-min-rating"
            label="מינ'"
          ></RatingInputField>
        </FilterSection>
        <FilterSection>
          <FinalButton
            color="success"
            onClick={handlePreferences}
            disabled={!validatePreferences()}
          >
            <CheckCircleOutlineOutlinedIcon fontSize="large" />
          </FinalButton>
          <FinalButton color="error" onClick={handleCloseMenu}>
            <CancelOutlinedIcon fontSize="large" />
          </FinalButton>
        </FilterSection>
      </Collapse>
    </FilterSearchBarWrapper>
  );
};
