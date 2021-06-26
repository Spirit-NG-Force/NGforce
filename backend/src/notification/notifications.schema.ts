import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = Notification & Document;

@Schema()
export class Notification {
    @Prop()
    message : string;
    @Prop()
    sender : string;
  
    
}

export const    NotificationSchema = SchemaFactory.createForClass(Notification);
