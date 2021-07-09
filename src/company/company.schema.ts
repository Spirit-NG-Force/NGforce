import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes} from 'mongoose';
import { Subscription } from "../subscription/subscription.interface"

export type CompanyDocument = Company & Document;

@Schema()
export class Company {
    @Prop()
    name : string;
    @Prop()
    adress: string;
    @Prop()
    phonenumber:string;
    @Prop() 
    website :string ; 
    @Prop()
    email:string
    @Prop()
    password : string;
   
    @Prop({default: 'Company'})
    status : string;
    
    @Prop({required: true, default: false})
    is_active: boolean;

    @Prop({type: SchemaTypes.ObjectId, ref: "Subscription"})
    subscription : Subscription;

    @Prop({required: true, default: 0})
    monthly_count: number

    @Prop()
    expiration_date: Date
}

export const CompanySchema = SchemaFactory.createForClass(Company);
