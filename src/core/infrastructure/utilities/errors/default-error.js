"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultError = void 0;
class DefaultError extends Error {
    constructor() {
        super(`An error occurrred`);
        this.name = "DefaultError";
    }
}
exports.DefaultError = DefaultError;
