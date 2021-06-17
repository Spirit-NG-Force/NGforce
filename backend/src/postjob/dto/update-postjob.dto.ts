import { PartialType } from '@nestjs/mapped-types';
import { CreatePostjobDto } from './create-postjob.dto';

export class UpdatePostjobDto extends PartialType(CreatePostjobDto) {
    CompanyName?: string;
    OfferTitle?: string;
    OfferDescription?: string;
    TypeOfContract?: string;
    Salary?: string;
    YearsOfExperience?: string;
}
