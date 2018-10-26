module.exports = (regexDao) => {

    var RegexService = {}

    RegexService.matchProductId = (requestBody) => {
        return new Promise((resolve, reject) => {
            if (!requestBody.productId) {
                reject("Missing Parameter");
            }
            regexDao.getAll()
                .then((regexArray) => {
                    for( var i=0; i<regexArray.length ; i++ ){
                        // var patt = ;
                        var patt = new RegExp(regexArray[i]["regex_string"]);
                        // var matches = requestBody.productId.search( patt );
                        var matches = patt.exec( requestBody.productId )
                        if( matches )
                            resolve( regexArray[i] );
                    }
                    reject("NO MATCH");
                }).catch((err) => {
                    reject(err);
                })
        });
    }

    return RegexService;
}