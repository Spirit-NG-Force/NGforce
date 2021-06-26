import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document ,  Schema as type} from 'mongoose';
import * as mongoose from 'mongoose';


export type MessagesDocument = Messages & Document;

@Schema({ timestamps: true })
export class Messages {
  @Prop({ required:true} )
  text:string;
  
  @Prop({enum: ['Company', 'User']})
  sender:string;

  @Prop({type:mongoose.Schema.Types.ObjectId , ref:"Company"})
  company_id:string

  @Prop({type:mongoose.Schema.Types.ObjectId , ref:"User"})
  user_id:string

}

export const MessagesSchema = SchemaFactory.createForClass(Messages);