import { MinLength,IsInt } from 'class-validator';
export class CreateCreateCvDto {
  @MinLength(1, {
    message: 'Title is too short',
  })
  id : string;
  @MinLength(1, {
    message: 'Title is too short',
  })
  name: string;
  @MinLength(1, {
    message: 'Title is too short',
  })
  lastName: string;
  @MinLength(1, {
    message: 'Title is too short',
  })
  age: number;
  @MinLength(1, {
    message: 'Title is too short',
  })
  email: string;
  @MinLength(1, {
    message: 'Title is too short',
  })
  adress: string;
  @MinLength(1, {
    message: 'Title is too short',
  })
  descProfil: string;
  @MinLength(1, {
    message: 'Title is too short',
  })
  ProfExp: string;
  @MinLength(1, {
    message: 'Title is too short',
  })
  studylevel: string;
  @MinLength(1, {
    message: 'Title is too short',
  })
  expyear :string
  @MinLength(1, {
    message: 'Title is too short',
  })
  field: string;
  @IsInt()
  phone:number;
  // @MinLength(1, {
  //   message: 'Title is too short',
  // })
  img:string;

}
