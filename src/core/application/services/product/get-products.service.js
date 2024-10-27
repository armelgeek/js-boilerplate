"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProductsService = void 0;
const product_repository_1 = require("../../../infrastructure/repositories/product.repository");
class GetProductsService {
    constructor() {
        this.productRepository = new product_repository_1.ProductRepository();
    }
    execute() {
        return this.productRepository.getProducts();
    }
}
exports.GetProductsService = GetProductsService;
