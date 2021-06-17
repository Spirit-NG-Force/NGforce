import { Document } from "mongoose";

export interface User extends Document {

    name : String;
    lastname : String;
    email : String;
    password : String;
    status : String;
    



}