"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.http = void 0;
const axios_1 = __importDefault(require("axios"));
const instance = axios_1.default.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});
const api = (axios) => {
    return {
        get: (url, config = {}) => {
            return axios.get(url, config);
        },
        delete: (url, config = {}) => {
            return axios.delete(url, config);
        },
        put: (url, body, config = {}) => {
            return axios.put(url, body, config);
        },
        patch: (url, body, config = {}) => {
            return axios.patch(url, body, config);
        },
        post: (url, body, config = {}) => {
            return axios.post(url, body, config);
        },
    };
};
exports.http = api(instance);
