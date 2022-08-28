const express = require("express");
const app = express();

app.get("/", (req, res) => {
  // Rota principal com pasta emputida. Dirname puxando por caminho do arquivo
  res.sendFile(__dirname + "/html/index.html");
});

/* app.get("/sobre", (req, res) => {
  // Rota alternativa
  res.send("Bem-vindo a pagina sobre. :)");
});*/

app.get("/sobre", (req, res) => {
  // Rota alternativa
  res.sendFile(__dirname + "/html/sobre.html");
});

app.get("/ola/:nome/:cargo/:cor", (req, res) => {
  // Rota com parametro é html embutido
  res.send(
    "<h1>Ola " +
      req.params.nome +
      "</h1><br>" +
      "<h2>Seu cargo e: " +
      req.params.cargo +
      "</h2><br>" +
      "<h3>Sua cor favorita e: " +
      req.params.cor +
      "</h3>"
  );
});



app.listen(3000, function () {
  console.log("Servidor rodando na porta http://localhost:3000");
});
