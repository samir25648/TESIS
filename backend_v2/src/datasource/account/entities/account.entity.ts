import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Account } from 'src/core/interfaces/account';

export enum AccountType {
  USER = '1',
  ADMIN = '2',
}

@Schema({ collection: 'account' })
export class AccountEntity implements Omit<Account, 'id'> {
  _id?: string;

  @Prop({
    type: String,
    enum: AccountType,
    default: '1',
  })
  accountType: AccountType;

  @Prop({ type: String })
  lastname: string;

  @Prop({ type: String })
  firstname: string;

  @Prop({ type: String, required: true })
  username: string;

  @Prop({ type: String, required: true })
  email: string;

  @Prop({ type: String, required: true })
  password: string;

  @Prop({ required: false })
  isPay: boolean;
}

export const AccountSchema = SchemaFactory.createForClass(AccountEntity);
