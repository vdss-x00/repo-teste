import express from "express";
import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import CategoryRouter from "./routers/CategoryRouter.js";
import ProductRouter from "./routers/ProductRouter.js"
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger.js";

const app = express();
const generatedSwaggerSpecPath = fileURLToPath(
    new URL("../public/api-docs/swagger.json", import.meta.url),
);
const apiSwaggerSpec =
    process.env.VERCEL === "1" && existsSync(generatedSwaggerSpecPath)
        ? JSON.parse(readFileSync(generatedSwaggerSpecPath, "utf8"))
        : swaggerSpec;

app.use(express.json());


app.get("/", (req, res) => {
    res.redirect("/api-docs/");
});

app.get(/^\/api-docs$/, (req, res) => {
    res.redirect(308, "/api-docs/");
});

app.get("/swagger.json", (req, res) => {
    res.status(200).json(apiSwaggerSpec);
});

app.use(
    "/api-docs",
    express.static("public/api-docs", { index: false }),
    swaggerUi.serve,
    swaggerUi.setup(apiSwaggerSpec, {
        swaggerOptions: {
            tryItOutEnabled: true,
            spec: apiSwaggerSpec,
        },
    }),
);

app.use("/categories", CategoryRouter);
app.use("/products", ProductRouter);

export default app;