import { Request, Response, Router } from "express";
import { Point } from "../models/point";
import uniqid from "uniqid";

const router: Router = Router();

Point.sync().then(() => {
  console.log("synced DB!");
});

router.get("/points", (req: Request, res: Response) => {
  res.send(Point.findAll());
});

router.get("/point/:id", (req: Request, res: Response) => {
  res.send(Point.findByPk(req.params.id));
});

router.post("/points/new", (req: Request, res: Response) => {
  console.log(req.body);
  let point = Point.build({
    id: uniqid(),
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    desc: req.body.desc,
    pointType: req.body.pointType,
    price: req.body.price || null,
    createdAt: new Date(),
  });

  res.send(point);
});

export default router;
