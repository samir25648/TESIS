import { Body, Controller, Get, Post } from '@nestjs/common';
import { RegisterDogUseCase } from './register-dog.use-case';
import { RegisterDog } from './register-dog.dto';
import { DogRepository } from 'src/datasource/dog-adoptado/dog-adoptado.datasource';

@Controller('')
export class RegisterDogHttpController {
  constructor(
    private readonly registerDogUseCase: RegisterDogUseCase,
    private readonly dogRepository: DogRepository,
  ) {}

  @Post('register-dog')
  async execute(@Body() registerdogDto: RegisterDog) {
    await this.registerDogUseCase.execute(registerdogDto);
  }

  @Post('dogme')
  async listme(@Body() listDto: { id: string; type: string }) {
    const data = await this.dogRepository.findAdoptados(listDto);
    console.log(data);
    return data;
  }

  @Post('search')
  async search(@Body() search: { id: string }) {
    console.log(search);
    const data = await this.dogRepository.findBy(search.id);
    console.log(data);
    return data;
  }

  @Get('dog')
  async list() {
    const data = await this.dogRepository.find();
    console.log(data);
    return data;
  }

  @Post('adoptar')
  async adoptar(@Body() adoptarDto: { id: string; id_user: string }) {
    console.log(adoptarDto);
    this.dogRepository.adopaar(adoptarDto);
  }

  @Post('passtodic')
  async dic(@Body() dicDTo: { id: string }) {
    await this.dogRepository.passToDic(dicDTo.id);
  }
}
