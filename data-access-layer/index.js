 var model = require('../model');

 var loginDao = require('./userAuthenticate.dao')( model.login );
 var regexDao = require('./regex.dao')(  );

 var appDao = { loginDao , regexDao };

 module.exports = appDao;