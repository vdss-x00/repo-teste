import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Sistema Plataforma Philia",
    })
})

const campanhas = [
    {
        id: 1,
        nomeFundador: "Nome1",
        categoria: "Tragédia Humanitária",
        descricao: "Doe para ajudar as pessoas afetadas!",
        aceitaDoacao: true
    },
    {
        id: 2,
        nomeFundador: "Nome2",
        categoria: "Doença",
        descricao: "",
        aceitaDoacao: true
    }
];

const blog = [
    {
        titulo1: "Quem Somos",
        paragrafo: "Nós somos uma plataforma de angariação de fundos para as mais variadas causas. Seja para ajudar vítimas de desastres naturais, pacientes de doenças, ou outros, estamos sempre aptos para ajudar!"
    }
]

app.get("/sobre-nos", (req, res) => {
    res.status(200).json(blog)
})

app.get("/campanhas", (req, res) => {
    res.status(200).json(campanhas)
})

app.post("/campanhas", (req, res) => {
    const campaign = req.body;

    campanhas.push(campaign);

    res.status(201).json(campaign)
})

export default app;