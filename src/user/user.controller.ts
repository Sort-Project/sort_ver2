import { UserService } from './user.service';
import { Controller, Get } from '@nestjs/common';

@Controller('/user')
export class UserController {
  constructor(private userService: UserService) {
    this.userService;
  }

  @Get()
  getAllUser() {
    return this.userService.getAllUser();
  }
}
