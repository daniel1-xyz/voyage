import { Request, Response } from "express";
import { PointRatingModel, PointRatingAttributes } from "../models/pointRating";
import uniqid from "uniqid";
import router from "./router";
import {
  calcAverageRatingForPoint,
  validatePointRating,
} from "../utils/pointRating";
import { getRatingsForPoint } from "../utils/pointRating";
import { PointModel } from "../models/point";

PointRatingModel.sync();

router.get(
  "/ratings/:pointId",
  async (req: Request<{ pointId: string }>, res: Response) => {
    try {
      res.send(await getRatingsForPoint(req.params.pointId));
    } catch (error) {
      res.status(500).send(`internal server Error ${error} `);
    }
  }
);

router.post(
  "/ratings/new",
  async (
    req: Request<{}, {}, Omit<PointRatingAttributes, "ratingId">>,
    res: Response
  ) => {
    try {
      if (!validatePointRating(req.body))
        return res.status(400).send("invalid request");

      const pointRating = PointRatingModel.build({
        ratingId: uniqid(),
        rating: req.body.rating,
        pointId: req.body.pointId,
      });

      await pointRating.save();

      const ratingsForPoint = await getRatingsForPoint(req.body.pointId);
      const averageRatingForPoint = calcAverageRatingForPoint(ratingsForPoint);

      const pointToUpdate = await PointModel.findByPk(req.body.pointId);

      if (!pointToUpdate) return res.status(404).send("point not found");

      pointToUpdate.set({ avgRating: averageRatingForPoint });

      await pointToUpdate.save();

      res.send(pointRating);
    } catch (error) {
      res.status(500).send(`internal server Error ${error} `);
    }
  }
);
