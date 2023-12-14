import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DogEntity } from './entities/dog-adoptado.entity';
import { Model } from 'mongoose';

@Injectable()
export class DogRepository {
  constructor(
    @InjectModel(DogEntity.name)
    private dogRepository: Model<DogEntity>,
  ) {}

  async findAdoptados({
    id,
    type,
  }: {
    id: string;
    type: string;
  }): Promise<DogEntity[]> {
    return await this.dogRepository.find({
      id_user: id,
      type: type,
    });
  }

  async find(): Promise<DogEntity[]> {
<<<<<<< Updated upstream
    return await this.dogRepository.find();
  }
  async findBy(id: string): Promise<DogEntity> {
    const data = await this.dogRepository.findOne({ _id: id });
=======
    const data = await this.dogRepository.find({ id_user: null });
>>>>>>> Stashed changes
    console.log(data);
    return data;
  }

<<<<<<< Updated upstream
  async create(dog: DogEntity): Promise<void> {
    await this.dogRepository.create(dog);
=======
  async findBy(id: string): Promise<DogEntity> {
    const data = await this.dogRepository.findOne({ _id: id });
    return data;
  }

  async create(dog: DogEntity): Promise<DogEntity> {
    const data = await this.dogRepository.create(dog);
    return data;
>>>>>>> Stashed changes
  }

  async passToDic(id: string): Promise<void> {
    await this.dogRepository.updateOne({ _id: id }, { type: '2' });
  }

  async adopaar({
    id_user,
    id,
  }: {
    id_user: string;
    id: string;
  }): Promise<void> {
    await this.dogRepository.updateOne({ _id: id }, { id_user: id_user });
  }

  async findDics({ id }: { id: string }): Promise<DogEntity[]> {
    return await this.dogRepository.find({
      id_user: id,
      type: '2',
    });
  }
}
