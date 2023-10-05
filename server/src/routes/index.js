const router = require("express").Router();

const deleteFav = require("../controllers/deleteFav");
const getCharById = require("../controllers/getCharById");
const login = require("../controllers/login");
const postFav = require("../controllers/postFav");
const postUser = require("../controllers/postUser");

//* GET getCharById: "/character/:id"
router.get("/character/:id", getCharById);

//* GET login: "/login"
router.get("/login", login);

//* POST login: "/login"
router.post("/login", postUser);

//* POST postFav: "/fav"
router.post("/fav", postFav);

//* DELETE deleteFav: "/fav/:id"
router.delete("/fav/:id", deleteFav);

module.exports = router;