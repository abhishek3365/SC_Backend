var appDao = require('../data-access-layer');

var loginService = require('./login.service')(appDao.loginDao);
var regexService = require('./regex.service')(appDao.regexDao);

var appService = { loginService , regexService };

module.exports = appService;