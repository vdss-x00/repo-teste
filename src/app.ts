import express from "express";
import CategoryRouter from "./routers/CategoryRouter.js";
import ProductRouter from "./routers/ProductRouter.js"
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger.js";

const app = express();
app.use(express.json());


app.get("/", (req, res) => {
    res.redirect("/api-docs/");
});

app.get(/^\/api-docs$/, (req, res) => {
    res.redirect(308, "/api-docs/");
});

app.get("/swagger.json", (req, res) => {
    res.status(200).json(swaggerSpec);
});

app.use(
    "/api-docs",
    express.static("public/api-docs", { index: false }),
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec, {
        swaggerOptions: {
            tryItOutEnabled: true,
            spec: swaggerSpec,
        },
    }),
);

app.use("/categories", CategoryRouter);
app.use("/products", ProductRouter);

export default app;