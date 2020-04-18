const md5 = require('md5');

module.exports = function cryptoPassoword(password){
    return md5(password);
}