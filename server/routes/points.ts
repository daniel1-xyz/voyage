import { Request, Response, Router } from "express";
import { Point } from "../models/point";

const router: Router = Router();

router.get("/points", (req: Request, res: Response) => {
  res.send(Point.findAll());
});

router.get("/point/:id", (req: Request, res: Response) => {
  res.send(Point.findByPk(req.params.id));
});

router.post("/point/new", (req: Request, res: Response) => {});

export default router;
