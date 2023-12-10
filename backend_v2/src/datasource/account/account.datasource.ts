import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AccountEntity } from './entities/account.entity';

@Injectable()
export class AccountRepository {
  constructor(
    @InjectModel(AccountEntity.name)
    private accountRepository: Model<AccountEntity>,
  ) {}

  async findBy(query: Partial<AccountEntity>): Promise<AccountEntity> {
    return await this.accountRepository.findOne(query);
  }

  async createAccount(account: Partial<AccountEntity>): Promise<AccountEntity> {
    const data = await this.accountRepository.create(account);
    const response = await this.findBy({
      _id: data._id.toString(),
    });
    console.log(response);

    if (response === null) {
      throw new HttpException('erro al crear el usuario', 403);
    }
    return response;
  }

  async payAccount(id: string): Promise<AccountEntity> {
    await this.accountRepository.updateOne(
      { _id: id as string },
      { isPay: true },
    );
    console.log(await this.findBy({ _id: id }));
    return await this.findBy({ _id: id });
  }
}
