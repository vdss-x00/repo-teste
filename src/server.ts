import http from "node:http";

const port = 3000;

const routes = {
    "/": {
        message: "Sistema Plataforma Philia",
    },
    "/sobre-nos": {
        message: "Nosso Blog",
    },
    "/campanhas": {
        message: "Veja Nossas Campanhas"
    }
};

const server = http.createServer((req, res) => {
    const response = routes[req.url as keyof typeof routes];

    if (!response){
        res.writeHead(404, {
            "content-type": "application/json",
        })

        return res.end(
            JSON.stringify({
                message: "Rota não encontrada.",
            }),
        );
    };

    res.writeHead(200, {
        "content-type": "application/json",
    });

    res.end(JSON.stringify(response));
});

server.listen(port, () => {
    console.log(`Servidor executado em http://localhost:${port}`);
})
