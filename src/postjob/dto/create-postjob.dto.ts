// import { Postjob } from '../postjob.schema';
import { MinLength } from 'class-validator';
export class CreatePostjobDto {
  company: string;

  @MinLength(1, {
    message: 'Title is too short',
  })
  offerTitle: string;

  @MinLength(1, {
    message: 'Title is too short',
  })
  offerDescription: string;

  @MinLength(1, {
    message: 'Title is too short',
  })
  typeOfContract: string;

  @MinLength(1, {
    message: 'Title is too short',
  })
  salary: string;

  @MinLength(1, {
    message: 'Title is too short',
  })
  yearsOfExperience: string;
}
