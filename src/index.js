//Criando o index.js
//Criação de uma aplicação Express
const express = require('express'); // Importando Express

const path = require('path'); // Importando Path 
//O Path retorna o caminho de forma dinamica

const app = express(); 
//O APP irá receber o express e todas suas dependencias

const router = express.Router()
//Isso permite que a gente crie diferentes urls e ENDPOINTs(tudo que vem depois da url principal) para que o frontend possa fazer chamadas

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/pages/home.html'));
})

//Aqui definimos a nossa rota para o arquivo html usando o Path para sempre retornar dinamicamente o vem antes da "/pages/home.html"
// Tudo que se encontra depois da barra "/" serão nossas rotas. 

app.use(router); 
//Após declarar nossas rotas, aqui falamos para nosso app usar elas como referencia

app.listen(3333, () => { 
    console.log('Servidor Rodando');
})
//Aqui definimos quem irá escutar nosso chamado e nos responder

app.get('/hello', (req, res) => {
    console.log('Get Funcionando');
    res.send({message: 'Hello World!!!'});
})
//Dentro do get ja definimos uma função anonima CALLBACK, que recebe uma requisição com o REQUEST e que retorna uma resposta com o REPLY. 

app.get('/usuario', (req, res) => {
    console.log('Get usuário funcionando');
    res.send({usuario: 'Maria Eduarda'});
})

