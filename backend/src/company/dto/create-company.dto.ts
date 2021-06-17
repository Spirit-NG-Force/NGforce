import {Company} from "../company.schema"

export class CreateCompanyDto {
    name:string ;
    adress:string ;
    phonenumber:number ;
    logo:string ;
    website:string ;
    email:string;
    password:string ;
    status:string ;
}
