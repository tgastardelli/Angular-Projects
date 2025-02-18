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

app.post('/validate-token', authenticateToken, (req, res) => {
    res.json({ message: 'Token válido' });
});



app.listen(PORT, () => {
    console.log(`O teste está rodando no http://localhost:${PORT}`);
});