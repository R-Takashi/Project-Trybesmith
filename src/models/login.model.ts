import { Pool } from 'mysql2/promise';

import { ILogin, IUser } from '../interfaces';

export default class LoginModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async verifyLogin(login: ILogin): Promise<IUser> {
    const query = 'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?';

    const [rows] = await this.connection
      .execute(query, [login.username, login.password]);

    const [user] = rows as IUser[];
    
    return user as IUser;
  }
}