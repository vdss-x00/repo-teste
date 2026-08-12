import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Sistema Plataforma Philia",
    })
})

app.get("/sobre-nos", (req, res) => {
    res.status(200).json({
        message: "Nosso Blog",
    })
})

app.get("/campanhas", (req, res) => {
    res.status(200).json({
        message: "Veja Nossas Campanhas",
    })
})

export default app;