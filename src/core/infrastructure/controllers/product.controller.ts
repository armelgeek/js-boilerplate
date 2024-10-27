import {ProductControllerInterface} from "../../application/controllers/product.controller.interface";
import {GetProductsUseCase} from "../../application/use-cases/product/get-products.use-case";
import {GetProductsService} from "../../application/services/product/get-products.service";
import {Product} from "../../domain/entities/Product";

export default class ProductController implements ProductControllerInterface {
  private getProductUseCase: GetProductsUseCase;
  constructor() {
    this.getProductUseCase = new GetProductsService();
  }
  getProducts(): Promise<Product[] | null> {
    return this.getProductUseCase.execute();
  }
}
