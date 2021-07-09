
export class CreateCompanyDto {  
    name:string ;
    adress:string ;
    phonenumber:number ;
    website:string ;
    email:string;
    password:string ;
    status?:string ;
    is_active:boolean;
    subscription:string ;
    monthly_count:number;
    expiration_date:Date;
}

