import express from "express";
import router from "./router";
import morgan from "morgan";
import cors from "cors";
import { protect } from "./modules/auth";
import { createNewUser, signIn } from "./handlers/users";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  console.log("Hello from express");
  res.status(200);
  res.json({ message: "hello" });
});

app.use("/api", protect, router);
app.post("/users", createNewUser);
app.post("/signin", signIn)

app.use((err, req, res, next) => {
  console.log(err)
  res.json({message: 'oops there was an error'})
})

export default app;
