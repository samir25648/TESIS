import { Module } from '@nestjs/common';
import { LoginuserHttpController } from './login-user.http.controller';
import { AccountDatasourceModule } from 'src/datasource/account/account.repository.module';
import { LoginUserUseCase } from './login-use.use-case';

@Module({
  imports: [AccountDatasourceModule],
  controllers: [LoginuserHttpController],
  providers: [LoginUserUseCase],
  exports: [LoginUserUseCase],
})
export class LoginUseModule {}
