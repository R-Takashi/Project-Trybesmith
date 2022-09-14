export interface IProduct {
  id?: number;
  name: string;
  amount: number;
  order?: number;
}

export interface IProductService {
  status: number,
  data: IProduct | IProduct[],
}