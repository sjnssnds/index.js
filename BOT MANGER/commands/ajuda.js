const config    = require("../config.json");
const commands  = require("../scripts/commandsReader")(config.prefix);

const descriptions = {
    "!ajuda": "Use esse comando para ver os comandos disponiveis",
    "!novidades": "Novidades de nossos produtos...",
    "!produtos": "Lista de produtos em Estoque",
    "!ping":  "Pingue o bot"
};


module.exports = async (client,msg) =>{
    var texto = "Comandos:";
    Object.keys(commands).forEach(command => {
        texto += `\n ${command}: ${descriptions[command] ? descriptions[command] : 'Não tem descrição'}`
    });
    msg.reply(texto);
};