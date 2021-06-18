import { Injectable } from '@nestjs/common';
import { CreatePostjobDto } from './dto/create-postjob.dto';
import { UpdatePostjobDto } from './dto/update-postjob.dto';
import { Postjob } from './postjob.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';


@Injectable()
export class PostjobService {
  constructor(
    @InjectModel('postjob') private postjobModel: Model<Postjob>){}
  create(createPostjobDto: CreatePostjobDto) {
    const Newjob=this.postjobModel.create(createPostjobDto)
    return Newjob
   
  }

 async findAll() {
    return this.postjobModel.find();
  }

  findOne(id: string) {
    return this.postjobModel.findById({ _id: id }).exec();
  }
  findOne1(updateUserDto : UpdateUserDto) {
    return this.postjobModel.find(updateUserDto).exec();
  }
  findOne2(id: string) {
    return this.postjobModel.find({id});
  }

   async update(id: string, updatePostjobDto: UpdatePostjobDto) {
   
      const job = this.postjobModel.findOneAndUpdate({ _id: id }, updatePostjobDto, {
        new: true,
        useFindAndModify: false,
      });
      return job;
  }

  remove(id: number) {
    return `This action removes a #${id} postjob`;
  }
}
