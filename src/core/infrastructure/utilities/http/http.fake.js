"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpFake = void 0;
const product_list_mock_1 = require("../../../mocks/products/product-list.mock");
exports.httpFake = {
    get: (path, params, config) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield product_list_mock_1.productListMock;
        return response;
    }),
    post: (path, params, config) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield product_list_mock_1.productListMock;
        return response;
    }),
    put: (path, params, config) => __awaiter(void 0, void 0, void 0, function* () { }),
    delete: (path, params, config) => __awaiter(void 0, void 0, void 0, function* () { })
};
