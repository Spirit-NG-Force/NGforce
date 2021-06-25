import { Injectable } from '@nestjs/common';
import { CreateFollowDto } from './dto/create-follow.dto';
import { UpdateFollowDto } from './dto/update-follow.dto';
import {Follows} from "./follows.interface";
import {Model} from "mongoose";
import {InjectModel} from "@nestjs/mongoose"
@Injectable()
export class FollowsService {
  constructor(@InjectModel('follows') private readonly follows: Model<Follows>) {}
  create(createFollowDto: CreateFollowDto){ 
    return this.follows.create(createFollowDto)
  }

  findAll() {
    return `This action returns all follows`;
  }

  findOne(iduser: string,idcompany : string) {
    return this.follows.find({iduser,idcompany});
  }

  update(id: number, updateFollowDto: UpdateFollowDto) {
    return `This action updates a #${id} follow`;
  }

  remove(iduser: string,idcompany: string) {
    return this.follows.findOneAndDelete({ iduser,idcompany });
  }
}
