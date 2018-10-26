module.exports = (regexService) => {

    var RegexController = {};
    var logger = require('../error-handling-logger/Logger');
    const shortid = require('shortid');

    RegexController.matchProductId = (req, res) => {

        let txnID = shortid.generate();
        var requestBody = req.body;
        logger.logMessage("Request Received from : POST/matchProductId" + "|" + requestBody, logger.LOG_LEVEL.verbose, 'REQUEST', txnID);

        regexService.matchProductId(requestBody).then((result) => {

            var responseJson = {
                success: true,
                payload: result
            }

            res.status(200).send(responseJson);
            logger.logMessage("Response Sent for : POST/matchProductId" + " |" + JSON.stringify(responseJson), logger.LOG_LEVEL.verbose, 'RESPONSE', txnID);

        }, (err) => {

            var responseJson = {
                success: false,
                payload: {},
                error: {
                    error_message: err
                }
            }

            res.status(200).send(responseJson);
            logger.logMessage("Response Sent for : POST/matchProductId" + " |" + JSON.stringify(responseJson), logger.LOG_LEVEL.verbose, 'RESPONSE', txnID);

        });

    };
    return RegexController;
};