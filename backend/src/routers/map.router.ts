import { Router } from "express";
import { dataMaps, users } from "../data";
import asyncHandler from 'express-async-handler'
import { MapModel } from "../models/map.model";
const router = Router();

router.get("/seed", asyncHandler(
  async (req, res) => {
    const mapCount = await MapModel.countDocuments();
    if (mapCount > 0) {
      res.send("Seed is already done");
      return;
    }
    await MapModel.create(dataMaps);
    res.send("Seed is Done!");
  }
));

router.get("/search/:searchTerm", (req, res) => {
  const searchTerm = req.params.searchTerm;
  const maps = dataMaps.filter((map) =>
    map.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  res.send(maps);
});

router.get("/:mapId", (req, res) => {
  const mapId = req.params.mapId;
  const map = dataMaps.find((map) => map.id === mapId);
  res.send(map);
});

export default router;