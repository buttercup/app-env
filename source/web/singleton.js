const { createAppEnv } = require("../core/appEnv.js");

let __inst = null;

function getSharedAppEnv() {
    if (!__inst) {
        __inst = createAppEnv();
    }
    return __inst;
}

module.exports = {
    getSharedAppEnv
};
