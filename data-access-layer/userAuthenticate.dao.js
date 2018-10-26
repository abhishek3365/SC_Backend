const fs = require('fs');

module.exports = (Login) => {

    var LoginDao = {}

    LoginDao.queryUser = (userQuery) => {
        return new Promise((resolve, reject) => {
            var login = JSON.parse(fs.readFileSync('./seed_files/loginData.json', 'utf8'));
            for (var i = 0; i < login.length; i++) {
                if (userQuery.login_id == login[i].login_id)
                    resolve(login[i]);
             }
             resolve();
        })
       
    }
    return LoginDao;
}