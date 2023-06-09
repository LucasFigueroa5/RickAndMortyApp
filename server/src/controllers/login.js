const users = require('../utils/users.js')

module.exports = (req, res) => {
    const {username, password} = req.query;
    let access = false

    users.forEach( user => {
    user.username === username && user.password === password
        ? access = true
        : null
    })
    return res.status(200).json( { access } );
}