export interface IProduct {
  id?: number;
  name: string;
  amount: number;
}

export interface IProductService {
  status: number,
  data: IProduct,
}