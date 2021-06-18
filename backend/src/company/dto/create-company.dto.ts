import {Company} from "../company.schema"

export class CreateCompanyDto {
    name:string ;
    adress:string ;
    phonenumber:number ;
    website:string ;
    email:string;
    password:string ;
    status:string ;
}
