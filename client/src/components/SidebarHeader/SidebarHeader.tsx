import CloseIcon from "@mui/icons-material/Close";
import {
  SidebarHeaderWrapper,
  CloseButton,
  SidebarTitle,
} from "./muiStyledComponents";

export const SidebarHeader = ({
  closeSidebar,
  headerTitle,
}: {
  closeSidebar: () => void;
  headerTitle: string;
}) => {
  return (
    <SidebarHeaderWrapper>
      <CloseButton onClick={() => closeSidebar()} title="סגור הוספת נקודה">
        <CloseIcon />
      </CloseButton>
      <SidebarTitle variant="h5">
        <strong>{headerTitle}</strong>
      </SidebarTitle>
    </SidebarHeaderWrapper>
  );
};
