import { Body, Controller, Post } from '@nestjs/common';
import { LoginUserDto } from './login-user.dto';
import { LoginUserUseCase } from './login-use.use-case';
import { Account } from 'src/core/interfaces/account';

@Controller()
export class LoginuserHttpController {
  constructor(private readonly loginUseCase: LoginUserUseCase) {}

  @Post('login')
  async execute(@Body() loginuserDto: LoginUserDto): Promise<Account> {
    return await this.loginUseCase.execute(loginuserDto);
  }
}
