import FilterAltIcon from "@mui/icons-material/FilterAlt";
import {
  FilterButton,
  FilterSearchRow,
  SearchFilterField,
  FullHeightDivider,
  FilterSearchBarWrapper,
} from "./muiStyledComponents";
import { Collapse } from "@mui/material";
import { useState } from "react";

export const FilterSearchBar = () => {
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState<boolean>(false);

  const toggleMenuOpen = () => {
    setIsFilterMenuOpen(!isFilterMenuOpen);
  };

  return (
    <FilterSearchBarWrapper>
      <FilterSearchRow>
        <SearchFilterField placeholder="חפש נקודה על המפה" />
        <FullHeightDivider orientation="vertical" />
        <FilterButton onClick={toggleMenuOpen}>
          <FilterAltIcon />
        </FilterButton>
      </FilterSearchRow>
      <Collapse in={isFilterMenuOpen}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Collapse>
    </FilterSearchBarWrapper>
  );
};
