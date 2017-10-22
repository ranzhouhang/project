const basicAuth = require('basic-auth');
const USER_DATA = require('../config/constants').USER_DATA;

module.exports = function islogin(req, resp, next) {
    function unauthorized(resp) {
        // 认证框要求输入用户名和密码的提示语
        resp.set('WWW-Authenticate', 'Basic realm=Input User&Password');
        return resp.sendStatus(401);
    }

    var user = basicAuth(req);

    if (!user || !user.name || !user.pass) {
        return unauthorized(resp);
    }
    if (USER_DATA[user.name] && USER_DATA[user.name] === user.pass) {
        return next();
    } else {
        return unauthorized(resp);
    }
};

