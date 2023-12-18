import { Drawer } from "@mui/material";
import { SidebarHeader } from "../SidebarHeader/SidebarHeader";

export const DisplayPointSidebar = ({
  id,
  isSidebarOpen,
  setIsSidebarOpen,
  setSidebarId,
}: {
  id: string;
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSidebarId: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const closeSidebar = () => {
    setIsSidebarOpen(false);
    setSidebarId("");
  };

  return (
    <Drawer open={isSidebarOpen} anchor="right" variant="persistent">
      <SidebarHeader closeSidebar={closeSidebar} headerTitle="צפייה בנקודה" />
    </Drawer>
  );
};
