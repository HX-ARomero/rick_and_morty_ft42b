const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res) => {
    //* character/:id => req.params = { id: 2 }
    const { id } = req.params;
    axios.get(URL + id) // promise
        .then(({data}) => {
            const {id, status, name, species, origin, image, gender} = data;
            const character = { id, status, name, species, origin, image, gender };
            character.name
                ? res.status(200).json(character)
                : res.status(404).send("Not found")
        })
        .catch(error => res.status(500).send(error.message));
}

module.exports = getCharById;

//! Cannot set headers after they are sent to the client
//? hola?name=Ariel
