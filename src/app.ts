import express from "express";
import CategoryRouter from "./routers/CategoryRouter.js";


const app = express();
app.use(express.json());


app.get("/", (req, res) => {
  res.status(200).json({
    message: "Restaurant Ordering System API",
    version: "1.0.0",
  });
});

app.use("/categories", CategoryRouter);

export default app;