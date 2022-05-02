const  Sequelize = require('sequelize')
const dbconfig  = require('../config/database.js')


const conexao = new Sequelize(dbconfig)

try{
    conexao.authenticate()
    console.log('conexão ORM Mysql Estabelecida!')
} catch (error){
    console.log('Falha na conexão Mysql')
}

module.exports = conexao