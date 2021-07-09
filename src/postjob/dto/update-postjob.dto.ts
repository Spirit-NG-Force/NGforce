import { PartialType } from '@nestjs/mapped-types';
import { CreatePostjobDto } from './create-postjob.dto';

export class UpdatePostjobDto extends PartialType(CreatePostjobDto) {
    company?: string;
    offerTitle?: string;
    offerDescription?: string;
    typeOfContract?: string;
    salary?: string;
    yearsOfExperience?: string;
}
