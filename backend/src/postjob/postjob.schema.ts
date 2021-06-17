import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PostjobDocument = Postjob & Document ;

@Schema()
export class Postjob {
@Prop()
CompanyName: string;
@Prop()
OfferTitle: string;
@Prop()
OfferDescription: string;
@Prop()
TypeOfContract: string;
@Prop()
Salary: string;
@Prop()
YearsOfExperience: string;


}
export const PostjobSchema = SchemaFactory.createForClass(Postjob);