// Chamar a funcao
const Sequelize = require("sequelize");

// Se conectar no banco de dados com (nome_tabela, usuário, senha e objeto. Exemplo host e liguagem)
const sequelize = new Sequelize("MORPHEUS", "root", "5550123E!", {
  host: "localhost",
  dialect: "mysql",
});

// Testando conexao com o banco
sequelize
  .authenticate()
  .then(function () {
    console.log("Conectado com sucesso!");
  })
  .catch(function (erro) {
    console.log("Falha ao se conectar: " + erro);
  });
