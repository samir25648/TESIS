import { Injectable } from '@nestjs/common';
import { DogRepository } from 'src/datasource/dog-adoptado/dog-adoptado.datasource';
import { RegisterDog } from './register-dog.dto';

@Injectable()
export class RegisterDogUseCase {
  constructor(private readonly dogRepository: DogRepository) {}

  async execute(registerDog: RegisterDog): Promise<void> {
    await this.dogRepository.create({
      type: '1',
      nombre: registerDog.nombre,
      raza: registerDog.raza,
      anos: registerDog.anos,
      vacunado: registerDog.vacunado,
      genero: registerDog.genero,
      image: registerDog.image,
      contacto: registerDog.contacto,
<<<<<<< Updated upstream
      id_user: registerDog.id_user,
=======
      id_user: null,
>>>>>>> Stashed changes
    });
  }
}
