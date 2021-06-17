import {Document} from "mongoose";

export interface Postjob extends Document {

    CompanyName: String;
    OfferTitle: String;
    OfferDescription: String;
    TypeOfContract: String;
    Salary: String;
    YearsOfExperience: String;
}