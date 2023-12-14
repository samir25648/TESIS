import { Injectable } from '@nestjs/common';
import { DogRepository } from 'src/datasource/dog-adoptado/dog-adoptado.datasource';
import { RegisterDic } from './register-dic.dto';

@Injectable()
export class RegisterDicUseCase {
  constructor(private readonly dogRepository: DogRepository) {}

  async execute(registerDog: RegisterDic): Promise<void> {
    await this.dogRepository.create({
      type: '2',
      genero: registerDog.genero,
<<<<<<< Updated upstream
      contacto: '',
=======
      contacto: registerDog.contacto,
>>>>>>> Stashed changes
      id_user: registerDog.id_user,
      anos: registerDog.anos,
      vacunado: registerDog.vacunado,
      raza: registerDog.raza,
      nombre: registerDog.nombre,
      image: registerDog.image,
    });
  }
}
