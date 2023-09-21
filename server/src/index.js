const http = require("http");
const PORT = 3001;
const getCharById = require("./controllers/getCharById");

http.createServer((req, res) => {
    //* Da acceso a request desde cualquier host
    res.setHeader('Access-Control-Allow-Origin', '*');

    //* RUTAS
    if(req.url.includes("/rickandmorty/character")) {
        const id = req.url.split("/").pop();
        getCharById(res, id);
    }

}).listen(PORT, "127.0.0.1",
        () => console.log(`Server listening on port ${PORT}`)
    )