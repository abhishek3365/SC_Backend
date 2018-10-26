const fs = require('fs');

module.exports = (Login) => {

    var RegexDao = {}

    RegexDao.getAll = () => {
        return new Promise((resolve, reject) => {
            var regexArray = JSON.parse(fs.readFileSync('./seed_files/regex.json', 'utf8'));
            resolve( regexArray );
        })
    }
    return RegexDao;
}