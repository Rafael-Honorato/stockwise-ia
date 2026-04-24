import { Produto } from './produto';
export interface Stock {
  id: string;
  storeId: string;
  productId: string;
  quantity: number;
  costPrice: number;
  salePrice: number;
}
