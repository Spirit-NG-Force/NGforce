import { MongooseModule, Prop,Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema()

export class CreateCv {
  @Prop()
  id: string;
  
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
  studylevel: string;
  
  @Prop()
  expyear: string;

  @Prop()
  field: string;
 
  @Prop()
  phone:number;

  @Prop()
  img:string;

}
export const CreateCvSchema = SchemaFactory.createForClass(CreateCv)

