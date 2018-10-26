var appService = require('../business-layer');

var loginController = require('./loginController')( appService.loginService );
var regexController = require('./regex.Controller')( appService.regexService );
var goodsController = require('./goods.controller')( );

var controller = { loginController , regexController , goodsController };

module.exports = controller;