const http = require("http");
const PORT = 3001;
const characters = require("./utils/data");

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    // RUTAS
    // [ rick, char, 2 ]
    if(req.url.includes("/rickandmorty/character")) {
        const id = req.url.split("/").pop();
        // console.log(typeof id);
        // caracter.id = number
        // id = string
        const character = characters.find(char => char.id === Number(id));
        // character = { --- } || undefined
        if(character) {
            return res
                .writeHead(200, { "content-type": "application/json"})
                .end(JSON.stringify(character))
        } else {
            return res
                .writeHead(404, { "content-type": "application/json"})
                .end(JSON.stringify({message: "Character not found!!!"}))
                
            }
    }
    return res
        .writeHead(404, { "content-type": "application/json"})
        .end(JSON.stringify({message: "Wrong url!!!"}))

}).listen(PORT, "127.0.0.1",
        () => console.log(`Server listening on port ${PORT}`)
    )