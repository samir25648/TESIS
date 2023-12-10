import { Dog } from 'src/core/interfaces/dog';

export class RegisterDic implements Omit<Dog, 'contacto' | 'dueno'> {
  contacto: string;
  id_user: string;
  nombre: string;
  image: string;
  id: string;
  raza: string;
  genero: string;
  anos: string;
  vacunado: string;
}
