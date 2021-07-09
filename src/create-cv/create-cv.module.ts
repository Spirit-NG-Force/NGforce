import { Module } from '@nestjs/common';
import { CreateCvService } from './create-cv.service';
import { CreateCvController } from './create-cv.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {CreateCvSchema}from './create-cv.schema';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';

@Module({
  imports: [ MongooseModule.forFeature([{ name: 'createcv', schema: CreateCvSchema }]) , CloudinaryModule] ,
  controllers: [CreateCvController],
  providers: [CreateCvService]
})
export class CreateCvModule {}
