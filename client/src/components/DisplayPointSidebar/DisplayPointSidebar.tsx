import { ClickAwayListener, Drawer } from "@mui/material";
import { SidebarHeader } from "../SidebarHeader/SidebarHeader";
import { DividerLine } from "../AddPointSidebar/muiStyledComponents";
import {
  Section,
  Paragraph,
  AddRatingButton,
  CenteredRating,
} from "./muiStyledComponents";
import { useEffect, useState } from "react";
import { getPoint } from "../../services/pointServices";
import { MapPoint } from "../../types/point";
import { PointRating } from "../../types/pointRating";

export const DisplayPointSidebar = ({
  pointId,
  isSidebarOpen,
  closeSidebar,
}: {
  pointId: string;
  isSidebarOpen: boolean;
  closeSidebar: () => void;
}) => {
  const [isRatingOptionEnabled, SetIsRatingOptionEnabled] = useState(false);
  const [userRating, setUserRating] = useState<PointRating | 0>(0);
  const [averageRating, serAverageRating] = useState<number | undefined>(
    undefined
  );
  const [pointDetails, setPointDetails] = useState<MapPoint | undefined>(
    undefined
  );

  const enableRatingOption = () => {
    SetIsRatingOptionEnabled(true);
  };

  useEffect(() => {
    const getPointDetailsById = async () => {
      const point = await getPoint(pointId);
      setPointDetails(point ? point.data : undefined);
    };
    pointId && getPointDetailsById();
  });

  return (
    <ClickAwayListener onClickAway={closeSidebar}>
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
            <Paragraph>{pointDetails?.price?.toString()}</Paragraph>
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
        <Section>
          <strong>דירוג</strong>
          <Paragraph>
            {averageRating ? averageRating : "אין דירוג"}
            <AddRatingButton onClick={enableRatingOption}>
              הוספת דירוג
            </AddRatingButton>
          </Paragraph>
        </Section>
        {isRatingOptionEnabled && (
          <Section>
            <CenteredRating
              dir="ltr"
              value={userRating}
              onChange={(e, value) => setUserRating(value as PointRating)}
              size="large"
            ></CenteredRating>
          </Section>
        )}
      </Drawer>
    </ClickAwayListener>
  );
};
