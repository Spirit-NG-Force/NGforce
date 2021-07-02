import {Document} from "mongoose";

export interface Postjob extends Document {
    company: string;
    offerTitle: string;
    offerDescription: string;
    typeOfContract: string;
    salary: string;
    yearsOfExperience: string;
}