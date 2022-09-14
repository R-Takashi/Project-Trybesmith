import LoginModel from '../models/login.model';
import connection from '../models/connection';

import { ILogin, ILoginService } from '../interfaces';

export default class LoginService {
  public model: LoginModel;

  constructor() {
    this.model = new LoginModel(connection);
  }

  public async verifyLogin(login: ILogin): Promise<ILoginService> {
    const user = await this.model.verifyLogin(login);

    if (!user) {
      return { status: 401, message: 'Username or password invalid' };
    }

    return { status: 200, id: user.id, username: user.username };
  }
}