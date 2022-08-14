require('dotenv').config();
const usersDB = {
    users: require('../model/users.json'),
    setUsers: function (data) {this.users = data}
} 
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');
const fsPromises = require('fs').promises;
const path = require('path');

const handleLogin = async (req, res) => {
    const { user, password } = req.body;
    if (!user || !password) return res.status(400).json({ 'message': 'Login and password are required.' });

    const foundUser = usersDB.users.find(person => person.login === user);
    if (!foundUser) return res.sendStatus(401); //Unauthorized
    //evaluate password
    const match = await bcrypt.compare(password, foundUser.password);
    if(match) {
        //create JWT
        const accessToken = jwt.sign(
            { "login": foundUser.login },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '1d' }
        );
        // const refreshToken = jwt.sign(
        //     { "login": foundUser.login },
        //     process.env.REFRESH_TOKEN_SECRET,
        //     { expiresIn: '1d' }
        // );
        // Saving refreshToken with current user
        const otherUsers = usersDB.users.filter(person => person.login !== foundUser.login);
        // const currentUser = { ...foundUser, refreshToken };
        const currentUser = { ...foundUser, accessToken };
        usersDB.setUsers([...otherUsers, currentUser]);
        await fsPromises.writeFile(
            path.join(__dirname, '..', 'model', 'users.json'),
            JSON.stringify(usersDB.users)
        );
        // res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 });
        res.json({ accessToken }); 
    } else {
        res.sendStatus(401);
    }
}

module.exports = { handleLogin };