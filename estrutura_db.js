/* Comentado para nao dar conflito no index.js

const Sequelize = require("sequelize")
const sequelize = new Sequelize('MORPHEUS', 'root', '5550123E!', {
  host: "localhost",
  dialect: "mysql"
});

// Tabela Postagens - simples
const Postagem = sequelize.define('POSTAGENS', {
  TITULO: {
    type: Sequelize.STRING
  },
  CONTEUDO: {
    type: Sequelize.TEXT
  }
});

// Emputar dados, como o INSERT INTO na tabela Postagem
Postagem.create({
  TITULO: "Ser ou não ser.",
  CONTEUDO: "Conteudo indevido, danger!"
});

// Tabela usuários - Intermediário
const Usuarios = sequelize.define('USUARIOS', {
  NOME: {
    type: Sequelize.STRING
  },
  SOBRENOME: {
    type: Sequelize.STRING
  },
  IDADE: {
    type: Sequelize.INTEGER
  },
  EMAIL: {
    type: Sequelize.STRING
  }
});

// Emputar dados, como o INSERT INTO na tabela Usuarios
Usuarios.create({
  NOME: "Elvis",
  SOBRENOME: "Farias",
  IDADE: 26,
  EMAIL: "elvis@gmail.com"
});


/* 
==============================================
******* Forcando a criacao de tabela *********
==============================================
*/
// Postagem.sync({force: true});
// Usuarios.sync({force: true});
