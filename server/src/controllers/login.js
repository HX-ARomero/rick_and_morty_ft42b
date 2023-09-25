const users = require("../utils/users");

module.exports = (req, res) => {
    const { email, password } = req.query;
    //* users = [ {email:2, password:..}, {...} ]
    //* {email:2, password:..} === email && password
    let access = false;
    users.forEach(user => {
        if(
            user.email === email && user.password === password
        ) access = true;
    })
    return res.status(200).json({ access });
}