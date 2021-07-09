import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';

import { MongooseModule } from '@nestjs/mongoose';
import {  NotificationSchema} from "./notifications.schema"
import { MessagesGateway } from 'src/app.gateway';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'notifications', schema:  NotificationSchema }])
  ],
  controllers: [NotificationController],
  providers: [NotificationService,MessagesGateway]
})
export class NotificationModule {}
