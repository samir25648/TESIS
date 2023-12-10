import { Module } from '@nestjs/common';
import { AccountDatasourceModule } from 'src/datasource/account/account.repository.module';
import { PaymentHttpController } from './payment.http.controller';

@Module({
  imports: [AccountDatasourceModule],
  controllers: [PaymentHttpController],
})
export class PaymentModule {}
