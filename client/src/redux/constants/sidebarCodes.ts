interface SidebarCodes {
  ADD_SIDEBAR: SidebarCodeType;
  DISPLAY_SIDEBAR: SidebarCodeType;
  NO_SIDEBAR: SidebarCodeType;
}

const sidebarCodes: SidebarCodes = {
  ADD_SIDEBAR: "add",
  DISPLAY_SIDEBAR: "display",
  NO_SIDEBAR: "none",
};

export type SidebarCodeType = "add" | "display" | "none";

export default sidebarCodes;
