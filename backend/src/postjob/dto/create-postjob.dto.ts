import { Postjob } from "../postjob.schema";
import { MinLength } from 'class-validator';
export class CreatePostjobDto {
    @MinLength(1, {
        message: 'Title is too short',
      })
      id : string;
      @MinLength(1, {
        message: 'Title is too short',
      })
    CompanyName: string;
    @MinLength(1, {
        message: 'Title is too short',
      })
    OfferTitle: string;
    @MinLength(1, {
        message: 'Title is too short',
      })
    OfferDescription: string;
    @MinLength(1, {
        message: 'Title is too short',
      })
    TypeOfContract: string;
    @MinLength(1, {
        message: 'Title is too short',
      })
    Salary: string;
    @MinLength(1, {
        message: 'Title is too short',
      })
    YearsOfExperience: string;
}
