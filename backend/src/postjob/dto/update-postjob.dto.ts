import { PartialType } from '@nestjs/mapped-types';
import { CreatePostjobDto } from './create-postjob.dto';

export class UpdatePostjobDto extends PartialType(CreatePostjobDto) {
    id? : string;
    CompanyName?: string;
    OfferTitle?: string;
    OfferDescription?: string;
    TypeOfContract?: string;
    Salary?: string;
    YearsOfExperience?: string;
}
