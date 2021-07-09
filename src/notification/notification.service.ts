import { Injectable } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Notification } from './notifications.schema'
import { MessagesGateway } from 'src/app.gateway';
export class NotificationService {
  constructor(
    @InjectModel('notifications') private notificationModel: Model<Notification> ,
    private gateway : MessagesGateway
    ){}
  create(createNotificationDto: CreateNotificationDto) {
    
    this.gateway.server.emit('notification',createNotificationDto)
    return this.notificationModel.create(createNotificationDto) ;
  }

  findAll() {
    return this.notificationModel.find({});
  }

  findOne(id: string) {
    return  this.notificationModel.find({sender : id});
  }

  update(id: number, updateNotificationDto: UpdateNotificationDto) {
    return `This action updates a #${id} notification`;
  }

  remove(id: number) {
    return `This action removes a #${id} notification`;
  }
}
