import { Router } from "express";
import jwt from "jsonwebtoken";
import { users } from "../data";

const router = Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    res.send(generateTokkinResponse(user));
  } else {
    res.status(400).send("Ім'я користувача або пароль неправильні");
  }
});

const generateTokkinResponse = (user: any) => {
  const token = jwt.sign(
    {
      email: user.email,
      isAdmin: user.isAdmin,
    },
    "SomeRandomText",
    {
      expiresIn: "30days",
    }
  );

  user.token = token;
  return user;
};

export default router;
