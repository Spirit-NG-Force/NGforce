import { MongooseModule, Prop,Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema()

export class CreateCv {
  @Prop()
  name: string;

  @Prop()
  lastName: string;

  @Prop()
  age: number;

  @Prop()
  email: string;

  @Prop()
  adress: string;

  @Prop()
  descProfil: string;

  @Prop()
  ProfExp: string;

  @Prop()
  lang: string;

  @Prop()
  img: string;

  @Prop()
  field: string;
 
  @Prop()
  phone:number;


}
export const CreateCvSchema = SchemaFactory.createForClass(CreateCv)

