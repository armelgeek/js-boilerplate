import {ProductRepositoryInterface} from "../../application/repositories/product.repository.interface";
import {Product} from "../../domain/entities/Product";
import {Http} from "../../application/utilities/http/http";
import {ProductDto} from "../dto/product/product.dto";
import {httpFake} from "../utilities/http/http.fake";

export class ProductRepository implements ProductRepositoryInterface{
  private client: Http;
  constructor() {
    this.client = httpFake;
  }
  async getProducts(): Promise<Product[]> {
    const products = await this.client.get<ProductDto>('');
    return products.map((product: Product): Product => ({
      id: product.id,
      title: product.title,
      price: product.price
    }));
  }

  async getProductsById(id: string): Promise<Product[]> {
    const products = await this.client.get<ProductDto>('', { id });
    return products.map((product: Product): Product => ({
        id: product.id,
        title: product.title,
        price: product.price
      })
    );
  }
}
