import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { UpdateFavoriteDto } from './dto/update-favorite.dto';
import { Favorite } from './favorite.interface';
import {InjectModel} from "@nestjs/mongoose";
@Injectable()
export class FavoriteService {
  constructor(@InjectModel('favorite') private readonly favorite: Model<Favorite>){}
  create(createFavoriteDto: CreateFavoriteDto) {
      return this.favorite.create(createFavoriteDto)
  }

  findAll() {
    return `This action returns all favorite`;
  }

  findOne(id: string) {
    return this.favorite.find({idcompany : id});
  }

  update(id: number, updateFavoriteDto: UpdateFavoriteDto) {
    return `This action updates a #${id} favorite`;
  }

  remove(id: string) {
    return this.favorite.findOneAndDelete({iduser : id})
  }
}
