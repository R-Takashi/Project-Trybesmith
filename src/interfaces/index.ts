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

export interface IUser {
  id?: number;
  username: string;
  classe: string;
  level: number;
  password: string;
}

export interface IUserService {
  status: number,
  data: IUser,
}

export interface IOrder {
  id: number;
  userId: number;
  productIds: number[];
}

export interface IOrderService {
  status: number,
  data: IOrder | IOrder[],
}