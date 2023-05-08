import express from "express";
import cors from "cors";
import { dataMaps, users } from "./data";
import jwt from 'jsonwebtoken';

const app = express();

app.use(express.json())

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

app.post("/api/users/login", (req, res) => {
  const {email, password} = req.body;
  const user = users.find(
    (user) => user.email === email && user.password === password);
  
  if (user) {
    res.send(generateTokkinResponse(user));
  } else {
    res.status(400).send("Ім'я користувача або пароль неправильні")
  }
})

const generateTokkinResponse = (user: any) => {
  const token = jwt.sign({
    email: user.email, isAdmin: user.isAdmin
  }, 'SomeRandomText', {
    expiresIn: "30days"
  });

  user.token = token;
  return user;
}