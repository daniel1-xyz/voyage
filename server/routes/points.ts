import { Request, Response, Router } from "express";
import { Point } from "../models/point";
import uniqid from "uniqid";
import { PointRating } from "../models/pointRating";
import { PointRatingType } from "../types/pointTypes";
import { PointType } from "../types/pointTypes";

const router: Router = Router();

Point.sync({ alter: true });
PointRating.sync();

router.get("/points", async (req: Request, res: Response) => {
  try {
    res.send(await Point.findAll());
  } catch (error) {
    res.status(500).send(`internal server Error ${error} `);
  }
});

router.get(
  "/point/:id",
  async (req: Request<{ id: string }>, res: Response) => {
    try {
      const point = await Point.findByPk(req.params.id);

      if (!point) return res.status(404).send("point not found");

      res.send(point);
    } catch (error) {
      res.status(500).send(`internal server Error ${error} `);
    }
  }
);

router.post(
  "/points/new",
  async (
    req: Request<
      {},
      {},
      {
        latitude: number;
        longitude: number;
        description: string;
        pointType: PointType;
        price: number | null;
      }
    >,
    res: Response
  ) => {
    try {
      const point = Point.build({
        id: uniqid(),
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        description: req.body.description,
        pointType: req.body.pointType,
        price: req.body?.price,
      });

      await point.save();

      res.send(point);
    } catch (error) {
      res.status(500).send(`internal server Error ${error} `);
    }
  }
);

router.patch(
  "/point/:id/rating",
  async (
    req: Request<{ id: string }, {}, { avgRating: number | null }>,
    res: Response
  ) => {
    try {
      const pointToUpdate = await Point.findByPk(req.params.id);

      if (!pointToUpdate) return res.status(404).send("point not found");

      pointToUpdate.set({ avgRating: req.body.avgRating });
      await pointToUpdate.save();
      res.send(pointToUpdate);
    } catch (error) {
      res.status(500).send(`internal server Error ${error} `);
    }
  }
);

router.get(
  "/ratings/:pointId",
  async (req: Request<{ pointId: string }>, res: Response) => {
    try {
      res.send(
        await PointRating.findAll({
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
      const pointRating = PointRating.build({
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

export default router;
