
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AttractionsDocument = Attractions & Document;

@Schema()
export class Attractions {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  detail: string;

  @Prop({ required: true })
  coverimage: string;

  @Prop({ required: true })
  latitude: number;

  @Prop({ required: true })
  longitude: number;
}

export const AttractionsSchema = SchemaFactory.createForClass(Attractions);
