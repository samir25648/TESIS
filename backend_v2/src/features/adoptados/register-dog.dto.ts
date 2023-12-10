import { Dog } from 'src/core/interfaces/dog';

export class RegisterDog implements Omit<Dog, 'dueno'> {
  id: string;
  id_user: string;
  nombre: string;
  raza: string;
  anos: string;
  vacunado: string;
  genero: string;
  image: string;
  contacto: string;
}
