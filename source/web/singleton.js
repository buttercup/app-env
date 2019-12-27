const { createAppEnv } = require("../core/appEnv.js");
const { assignObjImmutableProp } = require("../core/prop.js");

const WINDOW_INSTANCE_NAME = "@@__ButtercupAppEnv";

function getSharedAppEnv() {
    if (!window[WINDOW_INSTANCE_NAME]) {
        const appEnv = createAppEnv();
        assignObjImmutableProp(window, WINDOW_INSTANCE_NAME, appEnv);
    }
    return window[WINDOW_INSTANCE_NAME];
}

module.exports = {
    getSharedAppEnv
};
