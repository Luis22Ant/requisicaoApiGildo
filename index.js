const express = require('express');
const app = express();
app.use(express.json());

const produtos = [
  {
    id: 1,
    nome: 'Playstation 5',
    preco: 4999.99,
    quantidade: 20,
    categoria: 'Eletrônicos',
    fabricante: {
      nome: 'Sony',
    },
  },
  {
    id: 2,
    nome: 'Xbox Series X',
    preco: 4399.99,
    quantidade: 15,
    categoria: 'Eletrônicos',
    fabricante: {
      nome: 'Microsoft',
    },
  },
  {
    id: 3,
    nome: 'Nintendo Switch',
    preco: 2299.99,
    quantidade: 30,
    categoria: 'Eletrônicos',
    fabricante: {
      nome: 'Nintendo',
    },
  },
];

app.get('/produtos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const produto = produtos.find((p) => p.id === id);

  if (!produto) {
    res.status(404).json({ mensagem: 'Produto não encontrado' });
  } else {
    res.status(200).json(produto);
  }
});

app.post('/produtos', (req, res) => {
  const novoProduto = req.body;
  produtos.push(novoProduto);
  res.status(201).json({ mensagem: 'Produto adicionado' });
});


app.post("/produtos",(req, res) => { 
    var {id, title, price, year} = req.body;
    DB.games.push({
      id,
      title,
      price,
      year
  });
  res.sendStatus(200);
})





app.post('/produtos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const produtoIndex = produtos.findIndex((p) => p.id === id);

  if (produtoIndex === -1) {
    res.status(404).json({ mensagem: 'Produto não encontrado' });
  } else {
    const novoProduto = req.body;
    produtos[produtoIndex] = { ...produtos[produtoIndex], ...novoProduto };
    res.status(200).json({ mensagem: 'Produto modificado' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});