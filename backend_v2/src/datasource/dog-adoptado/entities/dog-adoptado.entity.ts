import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Dog } from 'src/core/interfaces/dog';

@Schema({ collection: 'DogAdoptado' })
export class DogEntity implements Omit<Dog, 'id' | 'dueno'> {
  _id?: string;

  @Prop({ type: String, required: true })
  nombre: string;

  @Prop({ type: String, required: true })
  raza: string;

  @Prop({ type: String, required: true })
  anos: string;

  @Prop({ type: String, required: true })
  vacunado: string;

  @Prop({ type: String, required: true })
  genero: string;

  @Prop({ type: String, required: true })
  image: string;

  @Prop({ type: String, required: false })
  contacto: string;

  @Prop({ type: String, required: false })
  id_user: string;

  @Prop({ type: String, required: false })
  type: string; // 1 adoptado 2 dic
}

export const DogSchema = SchemaFactory.createForClass(DogEntity);
