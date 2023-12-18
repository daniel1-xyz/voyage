import CloseIcon from "@mui/icons-material/Close";
import {
  SidebarHeaderWrapper,
  CloseButton,
  SidebarTitle,
} from "./muiStyledComponents";

export const SidebarHeader = ({
  closeSidebar,
  closeButtonTitle,
  headerTitle,
}: {
  closeSidebar: () => void;
  closeButtonTitle: string;
  headerTitle: string;
}) => {
  return (
    <SidebarHeaderWrapper>
      <CloseButton onClick={() => closeSidebar()} title={closeButtonTitle}>
        <CloseIcon />
      </CloseButton>
      <SidebarTitle variant="h5">
        <strong>{headerTitle}</strong>
      </SidebarTitle>
    </SidebarHeaderWrapper>
  );
};
