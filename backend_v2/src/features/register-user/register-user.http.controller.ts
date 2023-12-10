import { Body, Controller, Post } from '@nestjs/common';
import { AccountRepository } from 'src/datasource/account/account.datasource';
import { RegisterUserDto } from './register-user.dto';
import { AccountEntity } from 'src/datasource/account/entities/account.entity';

@Controller()
export class RegisterUserHttpController {
  constructor(private readonly accountRepository: AccountRepository) {}

  @Post('register')
  async execute(@Body() registerDto: RegisterUserDto): Promise<AccountEntity> {
    return await this.accountRepository.createAccount(registerDto);
  }
}
