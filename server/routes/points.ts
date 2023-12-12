import { Request, Response, Router } from "express";
import { Point } from "../models/point";
import uniqid from "uniqid";

const router: Router = Router();

Point.sync().then(() => {
  console.log("synced DB!");
});

router.get("/points", async (req: Request, res: Response) => {
  res.send(await Point.findAll());
});

router.get("/point/:id", async (req: Request, res: Response) => {
  res.send(await Point.findByPk(req.params.id));
});

router.post("/points/new", async (req: Request, res: Response) => {
  let point = Point.build({
    id: uniqid(),
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    desc: req.body.desc,
    pointType: req.body.pointType,
    price: req.body.price || null,
    createdAt: new Date(),
  });

  await point.save();

  res.send(point);
});

export default router;
