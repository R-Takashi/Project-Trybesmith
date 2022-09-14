import { Pool, ResultSetHeader } from 'mysql2/promise';

import { IUser } from '../interfaces';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(user: IUser): Promise<IUser> {
    const query = `INSERT INTO Trybesmith.Users (username, classe, level, password)
    VALUES (?, ?, ?, ?)`;

    const [data] = await this.connection.execute<ResultSetHeader>(
      query, 
      [user.username, user.classe, user.level, user.password],
    );

    const { insertId: id } = data;

    return { id, ...user };
  }

  public async getByUsername(username: string): Promise<IUser> {
    const query = 'SELECT * FROM Trybesmith.Users WHERE username = ?';

    const [data] = await this.connection.execute(query, [username]);

    const [user] = data as IUser[];
    return user;
  }
}