import { Document } from "mongoose";

export interface Messages extends Document {

     text:string;
     sender:string;
     read:Date;
     company_id:string,
     user_id:string,
     timestamps:boolean;
}