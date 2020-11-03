var express= require('express');
var app=express.Router();//crea la ruta donde viaja informacion
var userController= require('../controllers/userController')
var multiparty= require('connect-multiparty');
var path= multiparty({uploadDir: './uploads/perfiles'})

app.post('/registrar', userController.registrar)
app.post('/login', userController.login)
app.get('/usuario/:id', userController.get_user)
app.get('usuarios', userController.get_users)
app.put('/usuario/editar/imagen/:id', userController.update_foto)
app.get('/usuario/img/:img', userController.get_img);
app.put('/usuario/editar/:id', path, userController.editar_config);

module.exports= app;