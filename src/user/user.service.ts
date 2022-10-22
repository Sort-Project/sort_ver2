import { Injectable } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UserService {
  private user: User[] = [];

  getAllUser() {
    return this.user;
  }
}
