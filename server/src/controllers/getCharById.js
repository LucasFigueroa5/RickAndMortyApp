const axios = require('axios')

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await axios.get(URL + id);
        const { status, name, species, origin, image, gender } = response.data;
        const character = {
            id,
            name,
            status,
            image,
            gender,
            species,
            origin: origin?.name,
        }
        return name
            ? res.status(200).json(character)
            : res.status(404).send('Not Found')

    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = getCharById;