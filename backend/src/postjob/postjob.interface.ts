import {Document} from "mongoose";

export interface Postjob extends Document {
    id: string;
    CompanyName: string;
    OfferTitle: string;
    OfferDescription: string;
    TypeOfContract: string;
    Salary: string;
    YearsOfExperience: string;
}