import axios from "axios";
// This statement has been deleted.
;
// This statement has been deleted.
;
// This statement has been deleted.
;
// This statement has been deleted.
;
// This statement has been deleted.
;
/**
 * @typedef LoginData
 * @type {Object}
 * @property {string} identifier - identifier
 */
/**
 * @typedef LoginRequestConfig
 * @type {Object}
 * @property {LoginrData} data - body of the request
 */
/**
 * @param {LoginRequestConfig & Object<string,any>} config
 * @returns {Promise<any>}
 */
export function login(config) {
    config = { ...config, method: "post", url: "https://master.spicaengine.com/api/fn-execute/logintre" };
    axiosWriteValidator(config);
    axiosReadValidator(config);
    return axios.request(config).then(r => r.data);
}
function axiosWriteValidator(config) {
    if (["post", "put", "patch"].includes(config.method) && !config.data) {
        console.warn("Sending empty request body for post, put, patch requests is unusual. If it's not intented, please use config.data or update your spica function.");
    }
}
function axiosReadValidator(config) {
    if (["get", "delete", "trace", "options", "head"].includes(config.method) && config.data) {
        console.warn("Sending request body for get, delete, trace, options, head requests is unusual. If it's not intented, please remove config.data or update your spica function.");
    }
}
