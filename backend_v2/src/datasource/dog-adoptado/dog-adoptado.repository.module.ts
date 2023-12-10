import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DogEntity, DogSchema } from './entities/dog-adoptado.entity';
import { DogRepository } from './dog-adoptado.datasource';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: DogEntity.name, schema: DogSchema }]),
  ],
  providers: [DogRepository],
  exports: [DogRepository],
})
export class DogDatasourceModule {}
