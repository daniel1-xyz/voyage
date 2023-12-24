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
import { PointRating, PointRatingRow } from "../../types/pointRating";
import {
  addRatingForPoint,
  getAllRatingsForPoint,
} from "../../services/pointRatingServices";

export const DisplayPointSidebar = ({
  pointId,
  isSidebarOpen,
  closeSidebar,
}: {
  pointId: string;
  isSidebarOpen: boolean;
  closeSidebar: () => void;
}) => {
  const [isRatingOptionEnabled, setIsRatingOptionEnabled] = useState(false);
  const [userRating, setUserRating] = useState<PointRating | 0>(0);
  const [averageRating, setAverageRating] = useState<number>(0);
  const [pointDetails, setPointDetails] = useState<MapPoint | undefined>(
    undefined
  );

  const handleClose = () => {
    userRating && addRatingForPoint(pointId, userRating);
    setIsRatingOptionEnabled(false);
    setUserRating(0);
    closeSidebar();
  };

  const enableRatingOption = () => {
    setIsRatingOptionEnabled(true);
  };

  useEffect(() => {
    const getPointDetailsById = async () => {
      const point = await getPoint(pointId);
      setPointDetails(point ? point.data : undefined);
    };

    const getAverageRating = async () => {
      const ratings = await getAllRatingsForPoint(pointId);
      let sum = 0;
      ratings?.data.length
        ? (ratings?.data.forEach((row: PointRatingRow) => (sum += row.rating)),
          setAverageRating(parseFloat((sum / ratings?.data.length).toFixed(1))))
        : setAverageRating(0);
    };

    pointId && (getPointDetailsById(), getAverageRating());
  });

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <Drawer open={isSidebarOpen} anchor="right" variant="persistent">
        <SidebarHeader
          closeSidebar={handleClose}
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
            {averageRating}
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
