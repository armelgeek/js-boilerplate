import {Product} from "../../domain/entities/Product";

export interface ProductControllerInterface {
  getProducts(): Promise<Product[] | null>
}
