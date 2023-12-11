const express = require("express");
const router = express.Router();
const { Point } = require("../models/point");

router.get("/", (req: Request, res: Response) => {});

router.get("/:id", (req: Request, res: Response) => {});

module.exports = router;

export {};
