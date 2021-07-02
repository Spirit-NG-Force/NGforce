import { Module } from '@nestjs/common';
import { PostjobService } from './postjob.service';
import { PostjobController } from './postjob.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {PostjobSchema} from "./postjob.schema"
import { CompanyModule } from 'src/company/company.module';
@Module({
  imports: [
    CompanyModule,
    MongooseModule.forFeature([{ name: 'postjob', schema: PostjobSchema }]),
  ],
  controllers: [PostjobController],
  providers: [PostjobService]
})
export class PostjobModule {}
