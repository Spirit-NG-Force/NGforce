import { Injectable ,BadRequestException } from '@nestjs/common';
import { CreateCreateCvDto } from './dto/create-create-cv.dto';
import { UpdateCreateCvDto } from './dto/update-create-cv.dto';
import {CreateCv} from "./create-cv.interface";
import {Model} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Injectable()

export class CreateCvService {
  constructor(@InjectModel('createcv') private readonly createCv: Model<CreateCv> , 
  private cloudinary:CloudinaryService) {}

  create(createCreateCvDto: CreateCreateCvDto) {
    return this.createCv.create(createCreateCvDto);
  }

  findAll() {
    return this.createCv.find({});
  }

  async findOne(id: string) {
    return this.createCv.findOne({ id: id });
  }
  async findTwo(updateCreateCvDto: UpdateCreateCvDto) {
    return this.createCv.find(updateCreateCvDto);
  }

  async update(id: string, updatecreateCvDto : UpdateCreateCvDto){
    const update = this.createCv.findOneAndUpdate({ id: id }, updatecreateCvDto, {
      new: true,
      useFindAndModify: true,
    });
    return update;
  }

  async uploadImageToCloudinary(file: Express.Multer.File) {
    return await this.cloudinary.uploadImage(file).catch(() => {
      throw new BadRequestException('Invalid file type.');
    });
  }
  
  // remove(id: number) {
  //   return this.createCv.deleteOne({_id : id});
  // }
}
