import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CompanyDocument = Company & Document;

@Schema()
export class Company {
    @Prop()
    name : string;
    @Prop()
    adress: string;
    @Prop()
    phonenumber:string;
    @Prop( {type:String})
    logo :{ 
        default : "https://www.zimplaza.co.zw/wp-content/uploads/placeholdercompany5f3438282f524800f1d49cd2921bb0a56101e1aa16097ebd313b64778fc7c4bd1611448792.png"
    };
    @Prop() 
    website :string ; 
    @Prop()
    email:string
    @Prop()
    password : string;
    @Prop()
    status : string;
    
}

export const CompanySchema = SchemaFactory.createForClass(Company);
