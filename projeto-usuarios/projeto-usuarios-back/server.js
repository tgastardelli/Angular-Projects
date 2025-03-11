const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { USER_LIST_BD } = require('./utils/users-list-bd');
const { generateTokenOnLogin, validateToken } = require('./utils/jwt-manager');
const { authenticateToken } = require('./utils/middlewares/authenticate-token');

const app = express();
const PORT = 3000;

// Middleware para analisar o corpo das requisições
app.use(bodyParser.json());

// Usar o middleware cors para permitir todas as origens
app.use(cors());

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const USER_FOUND = USER_LIST_BD.find(user => user.username === username && user.password === password);

    if(!USER_FOUND) {
        return res.status(401).json({message: 'Invalid credentials.'});
    }

    // gerar o token
    const userToken = generateTokenOnLogin(username);

    return res.json({token: userToken});
});


app.put('/update-user', authenticateToken, (req, res) => {
    const tokenUsername = req.username
    const newUserInfos = req.body;

    const { name, email, username, password } = newUserInfos;

    if(!name || !email || !username || !password) {
        return res.status(400).json({ message: 'All fields (name, email, username, password) are required!' });
    }

    const USER_FOUND = USER_LIST_BD.findIndex((user) => user.username === tokenUsername);

    if(USER_FOUND === -1) {
        return res.status(403).json({ message: 'User not found.' })
    }

    USER_LIST_BD[USER_FOUND] = newUserInfos

    const newToken = generateTokenOnLogin(username);

    res.status(200).json({ 
        message: 'User updated sucessfuly.',
        token: newToken
    });
})

app.post('/create-user', authenticateToken, (req, res) => {
    const tokenUsername = req.username
    const newUser = req.body;

    const { name, email, username, password } = newUser;

    if(!name || !email || !username || !password) {
        return res.status(400).json({ message: 'All fields (name, email, username, password) are required!' });
    }

    const USER_TOKEN_FOUND = USER_LIST_BD.findIndex((user) => user.username === tokenUsername);

    if(USER_TOKEN_FOUND === -1) {
        return res.status(403).json({ message: 'User not found.' })
    }

    const USER_FOUND = USER_LIST_BD.findIndex((user) => user.username === newUser.username);
    const USER_ALREADY_REGISTRED = USER_FOUND !== -1;

    if(USER_ALREADY_REGISTRED) {
        return res.status(409).json({message: 'user already registered.'})
    }

    USER_LIST_BD.push(newUser);

    return res.status(201).json({ message: 'user sucessfully created.' })
})

app.post('/validate-token', authenticateToken, (req, res) => {
    res.json({ message: 'Token válido', username: req.username });
});



app.listen(PORT, () => {
    console.log(`O teste está rodando no http://localhost:${PORT}`);
});