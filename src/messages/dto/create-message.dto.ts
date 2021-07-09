import { Messages } from "../messages.schema";

export class CreateMessageDto {
    text:string;
    sender:string;
    read:Date;
    company_id:string;
    user_id:string;
    timestamps:boolean;
}
