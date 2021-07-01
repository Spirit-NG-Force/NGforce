import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';
import {MessagesSchema} from './messages.schema';
import { MongooseModule} from '@nestjs/mongoose';
import { CompanyModule } from 'src/company/company.module';
@Module({
  imports: [CompanyModule, MongooseModule.forFeature([{ name: 'messages', schema: MessagesSchema }])],
  controllers: [MessagesController],
  providers: [MessagesService]
})
export class MessagesModule {}
