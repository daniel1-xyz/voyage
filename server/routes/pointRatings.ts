import { Request, Response } from "express";
import { PointRatingModel } from "../models/pointRating";
import { PointRatingType } from "../types/pointTypes";
import uniqid from "uniqid";
import router from "./router";

PointRatingModel.sync();

router.get(
  "/ratings/:pointId",
  async (req: Request<{ pointId: string }>, res: Response) => {
    try {
      res.send(
        await PointRatingModel.findAll({
          where: { pointId: req.params.pointId },
        })
      );
    } catch (error) {
      res.status(500).send(`internal server Error ${error} `);
    }
  }
);

router.post(
  "/ratings/new",
  async (
    req: Request<{}, {}, { rating: PointRatingType; pointId: string }>,
    res: Response
  ) => {
    try {
      const pointRating = PointRatingModel.build({
        ratingId: uniqid(),
        rating: req.body.rating,
        pointId: req.body.pointId,
      });

      await pointRating.save();

      res.send(pointRating);
    } catch (error) {
      res.status(500).send(`internal server Error ${error} `);
    }
  }
);
