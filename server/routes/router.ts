import { Router } from "express";
import pointRouter from "./points";
import pointRatingRouter from "./pointRatings";

const router: Router = Router();

router.use("/", pointRouter);
router.use("/", pointRatingRouter);

export default router;
