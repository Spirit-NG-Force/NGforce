import { Document } from "mongoose"; 

export interface Company extends Document {
    name:String ;
    adress:String ;
    phonenumber:String ;
    logo:String ;
    website:String ;
    email:String;
    password:String ;
    status:String ;
}