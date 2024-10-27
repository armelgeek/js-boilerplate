import {GetProductsUseCase} from "../../use-cases/product/get-products.use-case";
import {Product} from "../../../domain/entities/Product";
import {ProductRepository} from "../../../infrastructure/repositories/product.repository";
import {ProductRepositoryInterface} from "../../repositories/product.repository.interface";

export class GetProductsService implements GetProductsUseCase {
    private productRepository: ProductRepositoryInterface;
    constructor() {
        this.productRepository = new ProductRepository();
    }
    execute(): Promise<Product[] | null> {
        return this.productRepository.getProducts();
    }

}
