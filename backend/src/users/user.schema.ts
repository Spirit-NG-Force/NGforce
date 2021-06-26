import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop()
    name : string;
    @Prop()
    lastname : string;
    @Prop()
    email : string;
    @Prop()
    password : string;
    
    @Prop({default: 'User'})
    status : string;
    
}

export const UserSchema = SchemaFactory.createForClass(User);
