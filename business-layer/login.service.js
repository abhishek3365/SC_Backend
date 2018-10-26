module.exports = (loginDao) => {

    var LoginService = {}

    LoginService.loginUser = (requestBody) => {
        return new Promise((resolve, reject) => {
            if (!requestBody.login_id) {
                reject("Missing Parameter");
            }
            loginDao.queryUser({ login_id: requestBody.login_id })
                .then((loginDoc) => {
                    if (loginDoc)
                        resolve({
                            login_id: loginDoc.login_id
                        });
                    else
                        resolve("Incorrect Login id");
                }).catch((err) => {
                    reject(err);
                })
        });
    }
    return LoginService;
}