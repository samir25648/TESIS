import { Module } from '@nestjs/common';
import { RegisterDicUseCase } from './register-dic.use-case';
import { DogDatasourceModule } from 'src/datasource/dog-adoptado/dog-adoptado.repository.module';
import { RegisterDicHttpController } from './register-dic.http.controller';

@Module({
  imports: [DogDatasourceModule],
  controllers: [RegisterDicHttpController],
  providers: [RegisterDicUseCase],
  exports: [RegisterDicUseCase],
})
export class RegisterDicModule {}
