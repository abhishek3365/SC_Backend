module.exports = (app) => {

    var controller = require('../controller');

    app.route('/login')
        .post(controller.loginController.authenticate);

    app.route('/matchId')
        .post(controller.regexController.matchProductId);

    app.route('/goods')
        .post(controller.goodsController.addGoods);

}