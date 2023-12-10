import { Module } from '@nestjs/common';
import { RegisterUserHttpController } from './register-user.http.controller';
import { AccountDatasourceModule } from 'src/datasource/account/account.repository.module';

@Module({
  imports: [AccountDatasourceModule],
  controllers: [RegisterUserHttpController],
})
export class RegisterUserModule {}
