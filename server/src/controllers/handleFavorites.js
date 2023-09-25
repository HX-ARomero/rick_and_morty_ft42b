let myFavorites = [];

const postFav = (req, res) => {
    //* req.body = {id, name, ...}
    myFavorites.push(req.body);
    return res.status(200).json(myFavorites);
}

const deleteFav = (req, res) => {
    const { id } = req.params;
    myFavorites = myFavorites.filter(char => {
        return char.id !== Number(id)
    })
    return res.status(200).json(myFavorites);
}

module.exports = {
    postFav,
    deleteFav
}