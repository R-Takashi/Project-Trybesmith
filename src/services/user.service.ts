import UserModel from '../models/user.model';
import connection from '../models/connection';

import { IUser, IUserService } from '../interfaces';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async create(user: IUser): Promise<IUserService> {
    const data = await this.model.create(user);
    const newUser = { status: 201, data };
    return newUser;
  }
}