import {Product} from "../../domain/entities/Product";

export interface ProductRepositoryInterface {
    getProducts: () => Promise<Product[]>;
    getProductsById: (id: string) => Promise<Product[]>;
}
