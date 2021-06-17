

import { Injectable } from '@nestjs/common';
import { CreateCreateCvDto } from './dto/create-create-cv.dto';
import { UpdateCreateCvDto } from './dto/update-create-cv.dto';
import {CreateCv} from "./create-cv.interface";
import {Model} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";

@Injectable()

export class CreateCvService {
  constructor(@InjectModel('CreateCv') private readonly createCv: Model<CreateCv>) {}
  create(createCreateCvDto: CreateCreateCvDto) {
    return this.createCv.create(createCreateCvDto);
  }

  findAll() {
    return this.createCv.find({});
  }

  async findOne(id: string) {
    return this.createCv.findById({ _id: id }).exec();
  }

  async update(id: string, updatecreateCvDto : UpdateCreateCvDto){
    const update = this.createCv.findOneAndUpdate({ _id: id }, updatecreateCvDto, {
      new: true,
      useFindAndModify: false,
    });
    return update;
  }
  remove(id: number) {
    return this.createCv.deleteOne({_id : id});
  }
}
