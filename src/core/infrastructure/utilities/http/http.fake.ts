import {Http} from "../../../application/utilities/http/http";
import {productListMock} from "../../../mocks/products/product-list.mock";

export const httpFake: Http = {
  get: async <T>(path: string, params?: Record<string, any>, config?: any) => {
    const response = await productListMock;
    return response;
  },
  post: async <T>(path: string, params?: Record<string, any>, config?: any) => {
    const response = await productListMock;
    return response;
  },
  put: async <T>(path: string, params?: Record<string, any>, config?: any) => {},
  delete: async <T>(path: string, params?: any, config?: any) => {}
};
