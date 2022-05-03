const categoriasControllers = require('../controllers/categoriasControllers.js')

Server.post('/categorias', categoriasControllers.store)

