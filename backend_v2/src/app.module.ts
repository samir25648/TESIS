import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegisterDicModule } from './features/register-dics/register-dic.module';
import { RegisterDogModule } from './features/adoptados/register-dog.module';
import { MongooseModule } from '@nestjs/mongoose';
import { LoginUseModule } from './features/login-user/login-user.module';
import { RegisterUserModule } from './features/register-user/register-user.module';
import { UploadImageModule } from './features/upload-file/upload-file.module';
import { PaymentModule } from './features/paymnet/paymnet.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/test'),
    RegisterDicModule,
    RegisterDogModule,
    LoginUseModule,
    RegisterUserModule,
    UploadImageModule,
    PaymentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
