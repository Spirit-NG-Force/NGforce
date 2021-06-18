import { Postjob } from "../postjob.schema";

export class CreatePostjobDto {
    id : string;
    CompanyName: string;
    OfferTitle: string;
    OfferDescription: string;
    TypeOfContract: string;
    Salary: string;
    YearsOfExperience: string;
}
