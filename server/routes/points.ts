import { Request, Response } from "express";
import { PointAttributes, PointModel } from "../models/point";
import uniqid from "uniqid";
import router from "./router";
import { validatePoint } from "../utils/point";

PointModel.sync({ alter: true });

router.get("/points", async (req: Request, res: Response) => {
  try {
    res.send(await PointModel.findAll());
  } catch (error) {
    res.status(500).send(`internal server Error ${error} `);
  }
});

router.get(
  "/point/:id",
  async (req: Request<{ id: string }>, res: Response) => {
    try {
      const point = await PointModel.findByPk(req.params.id);

      if (!point) return res.status(404).send("point not found");

      res.send(point);
    } catch (error) {
      res.status(500).send(`internal server Error ${error} `);
    }
  }
);

router.post(
  "/points/new",
  async (req: Request<{}, {}, Omit<PointAttributes, "id">>, res: Response) => {
    try {
      if (!validatePoint(req.body))
        return res.status(400).send("invalid request");

      const point = PointModel.build({
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
      const pointToUpdate = await PointModel.findByPk(req.params.id);

      if (!pointToUpdate) return res.status(404).send("point not found");

      pointToUpdate.set({ avgRating: req.body.avgRating });
      await pointToUpdate.save();
      res.send(pointToUpdate);
    } catch (error) {
      res.status(500).send(`internal server Error ${error} `);
    }
  }
);
