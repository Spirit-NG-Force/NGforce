import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { Company } from 'src/company/company.interface';

export type PostjobDocument = Postjob & Document ;

@Schema()
export class Postjob {
    @Prop({type: SchemaTypes.ObjectId, ref: "Company"})
    company: Company
    
    @Prop()
    offerTitle: string;
    
    @Prop()
    offerDescription: string;
    
    @Prop()
    typeOfContract: string;
    
    @Prop()
    salary: string;
    
    @Prop()
    yearsOfExperience: string;


}
export const PostjobSchema = SchemaFactory.createForClass(Postjob);