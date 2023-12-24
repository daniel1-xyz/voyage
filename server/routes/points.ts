import { Request, Response, Router } from "express";
import { Point } from "../models/point";
import uniqid from "uniqid";
import { PointRating } from "../models/pointRating";

const router: Router = Router();

Point.sync();
PointRating.sync();

router.get("/", (req: Request, res: Response) => {});

router.get("/points", async (req: Request, res: Response) => {
  res.send(await Point.findAll());
});

router.get("/point/:id", async (req: Request, res: Response) => {
  const point = await Point.findByPk(req.params.id);
  point ? res.send(point) : res.status(404).send("point not found");
});

router.post("/points/new", async (req: Request, res: Response) => {
  const point = Point.build({
    id: uniqid(),
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    description: req.body.description,
    pointType: req.body.pointType,
    price: req.body.price,
  });

  await point.save();

  res.send(point);
});

router.get("/ratings/:pointId", async (req: Request, res: Response) => {
  res.send(
    await PointRating.findAll({
      where: { pointId: req.params.pointId },
    })
  );
});

router.post("/ratings/new", async (req: Request, res: Response) => {
  const pointRating = PointRating.build({
    ratingId: uniqid(),
    rating: req.body.rating,
    pointId: req.body.pointId,
  });

  await pointRating.save();

  res.send(pointRating);
});

export default router;
