import { Injectable } from '@nestjs/common';
import { CreateCalendarDto } from './dto/create-calendar.dto';
import { UpdateCalendarDto } from './dto/update-calendar.dto';
import { Calendar } from './calendar.interface';
import {Model} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";
@Injectable()
export class CalendarService {
  constructor(@InjectModel('calendar') private readonly calendar: Model<Calendar>) {}
  create(createCalendarDto: CreateCalendarDto) {
    return this.calendar.create(createCalendarDto);
  }

  findAll() {
    return `This action returns all calendar`;
  }

  findOne(id: string) {
     return this.calendar.find({ id: id });
  }

  update(id: number, updateCalendarDto: UpdateCalendarDto) {
    return `This action updates a #${id} calendar`;
  }

  remove(id: number) {
    return `This action removes a #${id} calendar`;
  }
}
