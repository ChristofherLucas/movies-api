import { Request, Response } from 'express-serve-static-core';
import { Controller } from 'src/Controllers/Controller';
import { IUser } from 'src/Interfaces/Data/IUser';
import { User } from 'src/Models/User';
import { UserRepository } from 'src/Repositories/UserRepository';
import { UserService } from 'src/Services/UserService';

const userRepository = new UserRepository(User);
const userService = new UserService(userRepository);

export class UserController implements Controller {
  async login(req: Request, res: Response) {
    const data: IUser = req.body;
    try {
      const token = await userService.login(data);
      return res.status(200).json({ token });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error });
    }
  }

  async store(req: Request, res: Response) {
    const data: IUser = req.body;
    try {
      await userService.createUser(data);
      return res.status(201).json({ status_code: 201, message: 'ok' });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error });
    }
  }
}
