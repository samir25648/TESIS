import { Module } from '@nestjs/common';
import { DogDatasourceModule } from 'src/datasource/dog-adoptado/dog-adoptado.repository.module';
import { RegisterDogUseCase } from './register-dog.use-case';
import { RegisterDogHttpController } from './register-dog.http.controller';

@Module({
  imports: [DogDatasourceModule],
  controllers: [RegisterDogHttpController],
  providers: [RegisterDogUseCase],
  exports: [RegisterDogUseCase],
})
export class RegisterDogModule {}
