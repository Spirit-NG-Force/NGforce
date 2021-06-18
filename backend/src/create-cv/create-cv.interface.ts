import {Document} from 'mongoose'

export interface CreateCv extends Document{
  name: string;
  lastName: string;
  age: number;
  email: string;
  adress: string;
  descProfil: string;
  ProfExp: string;
  field: string;
  phone:number;
  studylevel:string;
  expyear: string;
  img:string;



}
