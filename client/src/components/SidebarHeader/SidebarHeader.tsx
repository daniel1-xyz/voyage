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
      <SidebarTitle variant="h5">
        <strong>{headerTitle}</strong>
      </SidebarTitle>
      <CloseButton onClick={() => closeSidebar()} title={closeButtonTitle}>
        <CloseIcon />
      </CloseButton>
    </SidebarHeaderWrapper>
  );
};
