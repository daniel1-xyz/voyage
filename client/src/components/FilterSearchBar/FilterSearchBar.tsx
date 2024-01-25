import FilterAltIcon from "@mui/icons-material/FilterAlt";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
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
import { MAX_RATING_LIMIT, MIN_RATING_LIMIT } from "../../types/pointRating";

export const FilterSearchBar = () => {
  const dispatch = useDispatch<AppDispatch>();

  const pointsToDisplay = useSelector(
    (state: RootState) => state.pointsToDisplay.pointsToDisplay
  );

  const [searchText, setSearchText] = useState<string>("");
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState<boolean>(false);
  const [filterPreferences, setFilterPreferences] = useState<FilterPreferences>(
    {}
  );

  const setPointType = (pointType: FilterPreferences["pointType"]) => {
    setFilterPreferences((prevState) => ({ ...prevState, pointType }));
  };
  const setMinPrice = (minPrice: FilterPreferences["minPrice"]) => {
    setFilterPreferences((prevState) => ({ ...prevState, minPrice }));
  };
  const setMaxPrice = (maxPrice: FilterPreferences["maxPrice"]) => {
    setFilterPreferences((prevState) => ({ ...prevState, maxPrice }));
  };
  const setMinRating = (minRating: FilterPreferences["minRating"]) => {
    setFilterPreferences((prevState) => ({ ...prevState, minRating }));
  };

  let currentPreferences: FilterPreferences = {};

  const resetPreferences = () => {
    currentPreferences = {};
    handleFilterByTextAndPreferences();
    handleCloseMenu();
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
    handleFilterByTextAndPreferences();
  };

  const handleFilterByTextAndPreferences = () => {
    if (currentPreferences) {
      const newFilteredPointsToDisplay = pointsToDisplay.filter(
        (pointToDisplay) =>
          pointToDisplay.description.includes(searchText) &&
          (pointToDisplay.pointType === filterPreferences.pointType ||
            filterPreferences.pointType === "כל סוג נקודה" ||
            !filterPreferences.pointType) &&
          (!filterPreferences.minRating ||
            (pointToDisplay.avgRating &&
              pointToDisplay.avgRating >= filterPreferences.minRating)) &&
          (!(filterPreferences.maxPrice || filterPreferences.minPrice) ||
            (pointToDisplay.price &&
              (!filterPreferences.maxPrice ||
                pointToDisplay.price <= filterPreferences.maxPrice)))
      );
      dispatch(setFilteredPointsToDisplay(newFilteredPointsToDisplay));
    } else {
      const newFilteredPointsToDisplay = pointsToDisplay.filter(
        (pointToDisplay) => pointToDisplay.description.includes(searchText)
      );
      dispatch(setFilteredPointsToDisplay(newFilteredPointsToDisplay));
    }
  };

  const handlePreferences = () => {
    validatePreferences() && (currentPreferences = filterPreferences);
    handleFilterByTextAndPreferences();
    handleCloseMenu();
  };

  const validatePreferences = (): boolean => {
    const isPriceValid: boolean =
      (!filterPreferences.minPrice || filterPreferences.minPrice >= 0) &&
      (!filterPreferences.maxPrice || filterPreferences.maxPrice >= 0);
    const isRatingValid: boolean =
      (!filterPreferences.minRating && filterPreferences.minRating !== 0) ||
      (filterPreferences.minRating <= MAX_RATING_LIMIT &&
        filterPreferences.minRating >= MIN_RATING_LIMIT);
    return isPriceValid && isRatingValid;
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
              value={
                filterPreferences?.minPrice !== undefined
                  ? filterPreferences.minPrice
                  : ""
              }
              onChange={(e) =>
                setMinPrice(e.target.value ? Number(e.target.value) : undefined)
              }
            ></PriceInputField>
            <PriceInputField
              type="number"
              id="filter-max-price"
              label="מקס'"
              value={
                filterPreferences?.maxPrice !== undefined
                  ? filterPreferences.maxPrice
                  : ""
              }
              onChange={(e) =>
                setMaxPrice(e.target.value ? Number(e.target.value) : undefined)
              }
            ></PriceInputField>
          </FilterSection>
        )}
        <FilterSection>
          <FilterSectionTitle>דירוג:</FilterSectionTitle>
          <RatingInputField
            type="number"
            id="filter-min-rating"
            label="מינ'"
            value={
              filterPreferences?.minRating !== undefined
                ? filterPreferences.minRating
                : ""
            }
            onChange={(e) =>
              setMinRating(e.target.value ? Number(e.target.value) : undefined)
            }
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
          <FinalButton color="warning" onClick={resetPreferences}>
            <DeleteOutlineOutlinedIcon fontSize="large" />
          </FinalButton>
        </FilterSection>
      </Collapse>
    </FilterSearchBarWrapper>
  );
};
