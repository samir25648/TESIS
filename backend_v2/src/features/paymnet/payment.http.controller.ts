import { Controller, Param, Post } from '@nestjs/common';
import { AccountRepository } from 'src/datasource/account/account.datasource';
import { AccountEntity } from 'src/datasource/account/entities/account.entity';

@Controller('account')
export class PaymentHttpController {
  constructor(private readonly accountRepository: AccountRepository) {}

  @Post('pay/:id')
  async execute(@Param('id') id: string): Promise<AccountEntity> {
    const data = await this.accountRepository.payAccount(id);
    return data;
  }
}
