import { Document } from 'mongoose';

export interface Subscription extends Document {
  name: string;
  monthly_limit: number;
  price: number;
}
