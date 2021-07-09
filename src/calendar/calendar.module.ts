import { Module } from '@nestjs/common';
import { CalendarService } from './calendar.service';
import { CalendarController } from './calendar.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {CalendarSchema}from './calendar.schema';

@Module({
  imports: [ MongooseModule.forFeature([{ name: 'calendar', schema: CalendarSchema }])],
  controllers: [CalendarController],
  providers: [CalendarService]
})
export class CalendarModule {}
