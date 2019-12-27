const { createAppEnv } = require("./appEnv.js");

let __inst = null;

function getSharedInstance() {
    if (!__inst) {
        __inst = createAppEnv();
    }
    return __inst;
}

module.exports = {
    getSharedInstance
};
