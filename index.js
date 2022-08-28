const express = require("express");
const app = express();
const Sequelize = require("sequelize");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");

// Configuracao para usar o handlebars como template do projeto
// Template Engine
app.engine("handlebars", handlebars.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json);

// Conexao Com o banco de dados
const sequelize = new Sequelize("MORPHEUS", "root", "5550123E!", {
  host: "localhost",
  dialect: "mysql",
});

// Rota (Puxando formulário)
app.get("/cad", (req, res) => {
  // Automaticamente o express sabe que está chamando do Handlebars
  res.render("formulario");
});

app.post("/add", (req, res) => {
  req.body.conteudo
  res.send("Texto: "+req.body.titulo+" Conteudo: "+req.body);
});

// Porta do servidor
app.listen(3001, (req, res) => {
  console.log("Servidor rodando na porta 3001");
});
