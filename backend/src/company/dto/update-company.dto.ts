import { PartialType } from '@nestjs/mapped-types';
import { CreateCompanyDto } from './create-company.dto';

export class UpdateCompanyDto extends PartialType(CreateCompanyDto) {
    name?:string ;
    adress?:string ;
    phonenumber?:number ;
    logo?:string ;
    website?:string ;
    email?:string ;
    password?:string ;
    status?:string ;
}
