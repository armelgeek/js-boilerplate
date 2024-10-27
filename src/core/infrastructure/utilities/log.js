"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const useLogger = () => {
    return {
        debug: (message) => console.debug("DEBUG:", message),
        info: (message) => console.info("INFO:", message),
        warning: (message) => console.warn("WARNING:", message),
        error: (message) => console.error("ERROR:", message),
    };
};
exports.logger = useLogger();
