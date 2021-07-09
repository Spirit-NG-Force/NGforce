import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SubscriptionDocument = Subscription & Document;

@Schema()
export class Subscription {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  monthly_limit: number;

  @Prop({ required: true })
  price: number;
}

export const SubscriptionSchema = SchemaFactory.createForClass(Subscription);
