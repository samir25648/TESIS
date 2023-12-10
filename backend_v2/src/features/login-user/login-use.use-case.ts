import { Injectable } from '@nestjs/common';
import { AccountRepository } from 'src/datasource/account/account.datasource';
import { LoginUserDto } from './login-user.dto';
import { Account } from 'src/core/interfaces/account';

@Injectable()
export class LoginUserUseCase {
  constructor(private readonly accountRepository: AccountRepository) {}

  async execute(loginUserDto: LoginUserDto): Promise<Account> {
    const findUser = await this.accountRepository.findBy({
      username: loginUserDto.username,
    });

    if (findUser.password !== loginUserDto.password) {
      throw Error('username o contraseña incorrecta');
    }

    return {
      id: findUser._id,
      firstname: findUser.firstname,
      email: findUser.email,
      lastname: findUser.lastname,
      username: findUser.username,
      password: findUser.password,
      isPay: findUser.isPay,
    };
  }
}
