import { Product } from "@/types";
import api from "./api";

export enum Urls {
    PRODUCTS_URL = '/products',
    FIND_PRODUCTS_URL = '/products?title_like',
  }

  export const fetchProducts = async ():Promise<Product[]> => {
    return api
      .get<Product[]>(Urls.PRODUCTS_URL)
      .then(({ data }) => data);
  };

  export const findProducts = async (name: string):Promise<Product[]> => {
    return api
      .get<Product[]>(`${Urls.FIND_PRODUCTS_URL}=${name.toLocaleLowerCase()}`)
      .then(({ data }) => data);
  };