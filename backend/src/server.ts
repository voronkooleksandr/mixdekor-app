import express from "express";
import cors from "cors";
import { dataMaps } from "./data";

const app = express();

app.use(cors({
  credentials: true,
  origin: ["http://localhost:4200"]
}));

const port = 5000;

app.listen(port, () => {
  console.log("Website served on http://localhost:" + port);
});

app.get("/api/maps", (req, res) => {
  res.send(dataMaps);
})

app.get("/api/maps/search/:searchTerm", (req, res) => {
  const searchTerm = req.params.searchTerm;
  const maps = dataMaps.filter((map) =>
    map.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  res.send(maps);
})

app.get("/api/maps/:mapId", (req, res) => {
  const mapId = req.params.mapId;
  const map = dataMaps.find((map) => map.id === mapId);
  res.send(map);
})