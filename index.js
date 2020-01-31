//criando uma variavel que permite usar tudo do express

const express = require('express');
//instanciando um servidor...
const server = express();

server.use(express.json());
const users = ['user1','user2'];

//middleware global

server.use( ( req,res , next) => {
 console.log(`método ${req.method}; URL: ${req.url}`);

 return next();
});


//lista todos os user
server.get('/users', (req, res) => {
 return res.json(users);
})

//busca um user

server.get('/users/:index', (req, res)=> {
 const {index} = req.params;

 return res.json(users[index]);
})

//criar user
server.post('/users', (req,res) =>{
  const { name } = req.body;

  users.push(name);

  return res.json(users);
});

//alterar user

server.put('/users/:index', (req, res) =>{
  const { index } = req.params;
  const { name } = req.body;

  users[index] = name;

  return res.json()
});

server.delete('/users/:index', (req,res) => {
  const { index } = req.params;

  users.splice(index, 1);

  return res.send();
});






server.listen(3000);