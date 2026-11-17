import express from "express";
import CategoryRouter from "./routers/CategoryRouter.js";
import ProductRouter from "./routers/ProductRouter.js"
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger.js";

const app = express();
app.use(express.json());


app.get("/", (req, res) => {
    res.redirect("/api-docs");
});

app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec),
);

app.use("/categories", CategoryRouter);
app.use("/products", ProductRouter);

export default app;