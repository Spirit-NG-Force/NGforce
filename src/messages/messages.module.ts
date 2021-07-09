import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';
import {MessagesSchema} from './messages.schema';
import { MongooseModule} from '@nestjs/mongoose';
import { CompanyModule } from 'src/company/company.module';
import { MessagesGateway } from 'src/app.gateway';
import { UsersModule } from 'src/users/users.module';
@Module({
  imports: [CompanyModule,UsersModule, MongooseModule.forFeature([{ name: 'messages', schema: MessagesSchema }])],
  controllers: [MessagesController],
  providers: [MessagesService,MessagesGateway]
})
export class MessagesModule {}
