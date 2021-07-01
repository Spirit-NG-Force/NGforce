import { Document } from "mongoose";

export interface Company extends Document {
    name:string ;
    adress:string ;
    phonenumber:string ;
    logo:string ;
    website:string ;
    email:string;
    password:string ;
    status:string ;
    is_active:boolean;
    subscription:string ;
    monthly_count:number;
    expiration_date:Date;
}