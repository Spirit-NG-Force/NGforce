import { PartialType } from '@nestjs/mapped-types';
import { CreateCreateCvDto } from './create-create-cv.dto';

export class UpdateCreateCvDto extends PartialType(CreateCreateCvDto) {
  id? : string
  name?: string;
  lastName?: string;
  age?: number;
  email?: string;
  phone?:number;
  adress?: string;
  descProfil?: string;
  ProfExp?: string;
  lang?: string;
  img?: string;
  field?: string;
}
