var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ApiClient_endpoint;
var HTTP_METHODS;
(function (HTTP_METHODS) {
    HTTP_METHODS["GET"] = "GET";
    HTTP_METHODS["POST"] = "POST";
    HTTP_METHODS["PUT"] = "PUT";
    HTTP_METHODS["PATCH"] = "PATCH";
    HTTP_METHODS["DELETE"] = "DELETE";
    HTTP_METHODS["OPTIONS"] = "OPTIONS";
})(HTTP_METHODS || (HTTP_METHODS = {}));
class ApiClient {
    constructor(endpoint) {
        _ApiClient_endpoint.set(this, void 0);
        __classPrivateFieldSet(this, _ApiClient_endpoint, endpoint, "f");
    }
    async readAll(page = 1, pageSize = 5) {
        const response = await fetch(`${__classPrivateFieldGet(this, _ApiClient_endpoint, "f")}?_page=${page}&_limit=${pageSize}`);
        return await response.json();
    }
    async readOne(id) {
        const response = await fetch(`${__classPrivateFieldGet(this, _ApiClient_endpoint, "f")}/${id}`);
        return await response.json();
    }
    async create(data) {
        const response = await fetch(__classPrivateFieldGet(this, _ApiClient_endpoint, "f"), {
            method: HTTP_METHODS.POST,
            body: JSON.stringify(data),
        });
        return await response.json();
    }
    async update(id, data) {
        const response = await fetch(`${__classPrivateFieldGet(this, _ApiClient_endpoint, "f")}/${id}`, {
            method: HTTP_METHODS.PATCH,
            body: JSON.stringify(data),
        });
        return await response.json();
    }
    async delete(id) {
        const response = await fetch(`${__classPrivateFieldGet(this, _ApiClient_endpoint, "f")}/${id}`, {
            method: HTTP_METHODS.DELETE,
        });
        return await response.json();
    }
}
_ApiClient_endpoint = new WeakMap();
export default ApiClient;
