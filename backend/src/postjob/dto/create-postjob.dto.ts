import { Postjob } from "../postjob.schema";

export class CreatePostjobDto {
    CompanyName: string;
    OfferTitle: string;
    OfferDescription: string;
    TypeOfContract: string;
    Salary: string;
    YearsOfExperience: string;
}
