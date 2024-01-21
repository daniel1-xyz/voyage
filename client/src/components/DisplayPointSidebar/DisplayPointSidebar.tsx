import { ClickAwayListener, Drawer } from "@mui/material";
import { SidebarHeader } from "../SidebarHeader/SidebarHeader";
import { DividerLine } from "../AddPointSidebar/muiStyledComponents";
import {
  Section,
  Paragraph,
  AddRatingButton,
  CenteredRating,
} from "./muiStyledComponents";
import { useState } from "react";
import { MapPoint } from "../../types/point";
import { PointRating } from "../../types/pointRating";
import { addRatingForPoint } from "../../services/pointRatingServices";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { updateSpecificPoint } from "../../redux/actions/pointsToDisplay";
import { getPointById } from "../../services/pointServices";

export const DisplayPointSidebar = ({
  currentPoint,
  isSidebarOpen,
  closeSidebar,
}: {
  currentPoint: MapPoint | undefined;
  isSidebarOpen: boolean;
  closeSidebar: () => void;
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const [isRatingOptionEnabled, setIsRatingOptionEnabled] = useState(false);
  const [userRating, setUserRating] = useState<PointRating | 0>(0);

  const handleClose = async () => {
    // To prevent other sidebar close in case the sidebar isn't open
    if (!isSidebarOpen) return;

    if (userRating && currentPoint?.id) {
      await addRatingForPoint(currentPoint.id, userRating);
      const updatedPoint: MapPoint = (await getPointById(currentPoint.id))
        ?.data;
      dispatch(updateSpecificPoint(updatedPoint));
    }

    resetRatingState();
    closeSidebar();
  };

  const resetRatingState = () => {
    setIsRatingOptionEnabled(false);
    setUserRating(0);
  };

  const enableRatingOption = () => {
    setIsRatingOptionEnabled(true);
  };

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
          <strong>{currentPoint?.pointType}</strong>
        </Section>
        <Section>
          <strong>תיאור הנקודה</strong>
          <Paragraph>{currentPoint?.description}</Paragraph>
        </Section>
        {currentPoint?.pointType === "אטרקציה" && (
          <Section>
            <strong>מחיר</strong>
            <Paragraph>{currentPoint?.price?.toString()}</Paragraph>
          </Section>
        )}
        <Section>
          <strong>מיקום הנקודה</strong>
          <div>
            <strong>מיקום X</strong>
            <Paragraph>{currentPoint?.longitude.toString()}</Paragraph>
          </div>
          <div>
            <strong>מיקום Y</strong>
            <Paragraph>{currentPoint?.latitude.toString()}</Paragraph>
          </div>
        </Section>
        <Section>
          <strong>דירוג</strong>
          <Paragraph>
            {currentPoint?.avgRating || 0}
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
