const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware para analisar o corpo das requisições
app.use(bodyParser.json());

// Usar o middleware cors para permitir todas as origens
app.use(cors());

app.listen(PORT, () => {
    console.log(`O teste está rodando no http://localhost:${PORT}`);
});