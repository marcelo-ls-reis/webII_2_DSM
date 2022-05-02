const http = require('http') // instanciou o protocolo http
const servidor = require('./src/config/aplicativo.js') // aqui vai o arquivo que cria o server


require('./src/database/indexDb')

http.createServer(servidor).listen(servidor.get('porta'), function() { //aqui ele só vai ouvir a porta
    console.log(`Servidor rodando na porta ${server.get('url')}${server.get('porta')}`) //aqui ele vai mostrar na tela
})

