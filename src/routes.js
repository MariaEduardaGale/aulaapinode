const express = require('express'); // Importando Express

const path = require('path'); // Importando Path 
//O Path retorna o caminho de forma dinamica

const router = express.Router()
//Isso permite que a gente crie diferentes urls e ENDPOINTs(tudo que vem depois da url principal) para que o frontend possa fazer chamadas

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/pages/home.html'));
})
//Aqui definimos a nossa rota para o arquivo html usando o Path para sempre retornar dinamicamente o vem antes da "/pages/home.html"
// Tudo que se encontra depois da barra "/" serão nossas rotas.

const clienteController = require('./clienteController');
//Chamando o arquivo que controla o clienre

//Rotas para clientes
router.get('/clientes', clienteController.listarClientes); 

router.get('/clientes/:cpf', clienteController.buscarCliente); 

//POST: Aceita criar algum objeto do servidor
router.post('/clientes',clienteController.adicionarCliente); 

//PUT: Aceita susbtituir algum objeto do servidor 
//PATH: Aceita alterar algum objeto do servidor
router.patch('/clientes/:cpf', clienteController.atualizarCliente); 

//DELETE: Informa por meio do URL o objeto a ser deletado 
router.delete('/clientes/:cpf', clienteController.deletarCliente); 

//Rotas para produtos 

const produtoController = require('./produtoController'); 

router.get('/produtos',produtoController.listarProdutos); 

router.get('/produtos/:id', produtoController.buscarProduto); 

router.get('/produtos/:id', produtoController.deletarProduto); 

router.get('/produtos/nome/:nome_produto', produtoController.buscarProduto); 

//Rotas para regiao 

const regiaoController = require('./regiaoController.js');

router.get('/regiao', regiaoController.listarRegiao);

router.get('/regiao/:id', regiaoController.buscarRegiao);

router.post('/regiao', regiaoController.adicionarRegiao);

router.patch('/regiao/:id', regiaoController.atualizarRegiao);

router.delete('/regiao/:id', regiaoController.deletarRegiao);

//Rotas para entregador 
const entregadorController = require('./entregadorController.js');

router.get('/entregador', entregadorController.listarEntregador);

router.get('/entregador/:id', entregadorController.buscarEntregador);

router.post('/entregador', entregadorController.adicionarEntregador);

router.patch('/entregador/:id', entregadorController.atualizarEntregador);

router.delete('/entregador/:id', entregadorController.deletarEntregador);

//Rotas para pedido 

const pedidoController = require('./pedidoController.js');

router.get('/pedido', pedidoController.listarPedido);

router.get('/pedido/:id', pedidoController.buscarPedido);

router.post('/pedido', pedidoController.adicionarPedido);

router.patch('/pedido/:id', pedidoController.atualizarPedido);

router.delete('/pedido/:id', pedidoController.deletarPedido);

//Rotas para item pedido 

const itemPedidoController = require('./itemPedidoController.js'); 

router.get('/itempedido', itemPedidoController.listarItem_pedido); 

router.get('/itempedido', itemPedidoController.buscarItem_pedido); 

module.exports = router;