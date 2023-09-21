const axios = require("axios");

const getCharById = (res, id) => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        //* Promesa = { status: pending, resolve: {data: { } } }
        .then(({ data }) => { //* data = { id, name, ...}
            const character = {
                id: data.id,
                name: data.name,
                gender: data.gender,
                species: data.species,
                origin: data.origin,
                image: data.image,
                status: data.status
            }
            return res
                .writeHead(200, {"Content-Type": "application/json"})
                .end(JSON.stringify(character))
            })
            .catch(error => {
                return res
                    .writeHead(500, {"Content-Type": "text/plain"})
                    .end(error.message)
        })
}

module.exports = getCharById;