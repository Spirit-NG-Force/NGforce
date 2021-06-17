import {Document} from 'mongoose'

export interface CreateCv extends Document{
  name: string;
  lastName: string;
  age: number;
  email: string;
  adress: string;
  descProfil: string;
  ProfExp: string;
  lang: string;
  img: string;
  field: string;
  phone:number;

}
