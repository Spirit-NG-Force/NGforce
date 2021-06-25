import { MongooseModule, Prop,Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema()

export class Calendar {
  @Prop()
  id: string;
  @Prop()
  title: string;

  @Prop()
  start: string;
  @Prop()
  end: string;
  @Prop()
  color : string;
}
export const CalendarSchema = SchemaFactory.createForClass(Calendar)