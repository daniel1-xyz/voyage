import { Drawer } from "@mui/material";
import { SidebarHeader } from "../SidebarHeader/SidebarHeader";
import { DividerLine } from "../AddPointSidebar/muiStyledComponents";
import { Section, Paragraph } from "./muiStyledComponents";
import { useEffect, useState } from "react";
import { getPoint } from "../../services/pointServices";
import { Point } from "../../types/point";

export const DisplayPointSidebar = ({
  id,
  isSidebarOpen,
  setIsSidebarOpen,
  setId,
}: {
  id: string;
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setId: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [pointDetails, setPointDetails] = useState<Point | undefined>(
    undefined
  );

  useEffect(() => {
    const getPointDetailsById = async () => {
      const point = await getPoint(id);
      setPointDetails(point ? point.data : undefined);
    };
    id && getPointDetailsById();
  });

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    setId("");
  };

  return (
    <Drawer open={isSidebarOpen} anchor="right" variant="persistent">
      <SidebarHeader
        closeSidebar={closeSidebar}
        closeButtonTitle="סגור צפייה בנקודה"
        headerTitle="צפייה בנקודה"
      />
      <DividerLine />
      <Section>
        <strong>{pointDetails?.pointType}</strong>
      </Section>
      <Section>
        <strong>תיאור הנקודה</strong>
        <Paragraph>{pointDetails?.description}</Paragraph>
      </Section>
      {pointDetails?.pointType === "אטרקציה" && (
        <Section>
          <strong>מחיר</strong>
          <Paragraph>{pointDetails?.price?.toString() || "0"}</Paragraph>
        </Section>
      )}
      <Section>
        <strong>מיקום הנקודה</strong>
        <div>
          <strong>מיקום X</strong>
          <Paragraph>{pointDetails?.longitude.toString()}</Paragraph>
        </div>
        <div>
          <strong>מיקום Y</strong>
          <Paragraph>{pointDetails?.latitude.toString()}</Paragraph>
        </div>
      </Section>
    </Drawer>
  );
};
