import { PartialType } from '@nestjs/mapped-types';
import { CreateCalendarDto } from './create-calendar.dto';

export class UpdateCalendarDto extends PartialType(CreateCalendarDto) {
  
        id?:string;
        title?:string;
        start?:string;
        end?:string;
        color? : string;
    
    
}
