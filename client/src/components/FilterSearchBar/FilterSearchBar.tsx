import FilterAltIcon from "@mui/icons-material/FilterAlt";
import {
  FilterButton,
  FilterSearchBarWrapper,
  SearchFilterField,
  FullHeightDivider,
} from "./muiStyledComponents";

export const FilterSearchBar = () => {
  return (
    <FilterSearchBarWrapper>
      <SearchFilterField placeholder="חפש נקודה במפה" />
      <FullHeightDivider orientation="vertical" />
      <FilterButton>
        <FilterAltIcon />
      </FilterButton>
    </FilterSearchBarWrapper>
  );
};
