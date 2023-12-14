import { Dog } from 'src/core/interfaces/dog';

export class RegisterDog implements Omit<Dog, 'dueno'> {
  id: string;
<<<<<<< Updated upstream
  id_user: string;
=======
>>>>>>> Stashed changes
  nombre: string;
  raza: string;
  anos: string;
  vacunado: string;
  genero: string;
  image: string;
  contacto: string;
}
