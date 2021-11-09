

const Postagem = sequelize.define("postagens", {
    titulo: {
        type: Sequelize.STRING, // possui limite de caracteres
    },
    conteudo: {
        type: Sequelize.TEXT, // não possui limite de caracteres
    },
});

Postagem.sync();
Postagem.create({
    titulo: "Um novo titulo",
    conteudo: "Um novo conteudo",
});

const Usuario = sequelize.define("usuarios", {
    nome: {
        type: Sequelize.STRING,
    },
    sobrenome: {
        type: Sequelize.STRING,
    },
    idade: {
        type: Sequelize.INTEGER,
    },
    email: {
        type: Sequelize.STRING,
    },
});

Usuario.create({
    nome: "Arnon",
    sobrenome: "Rodrigues",
    idade: 31,
    email: "arnonrdp@gmail.com",
});
Usuario.sync();
