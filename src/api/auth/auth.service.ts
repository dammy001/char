import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  private readonly users: UserDto[] = [];

  create(user: UserDto) {
    this.users.push(user);
    return this.users;
  }
}
