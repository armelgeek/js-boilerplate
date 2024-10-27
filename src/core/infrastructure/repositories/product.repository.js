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
exports.ProductRepository = void 0;
const http_fake_1 = require("../utilities/http/http.fake");
class ProductRepository {
    constructor() {
        this.client = http_fake_1.httpFake;
    }
    getProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield this.client.get('');
            return products.map((product) => ({
                id: product.id,
                title: product.title,
                price: product.price
            }));
        });
    }
    getProductsById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield this.client.get('', { id });
            return products.map((product) => ({
                id: product.id,
                title: product.title,
                price: product.price
            }));
        });
    }
}
exports.ProductRepository = ProductRepository;
