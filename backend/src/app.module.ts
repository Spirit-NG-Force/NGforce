import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CompanyModule } from './company/company.module';
import { PostjobModule } from './postjob/postjob.module';
import { CreateCvModule } from './create-cv/create-cv.module';
import { MailModule } from './mail/mail.module';
import { MessagesModule } from './messages/messages.module';
import { CalendarModule } from './calendar/calendar.module';
import { FollowsModule } from './follows/follows.module';
import { NotificationModule } from './notification/notification.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { MessagesGateway } from './app.gateway';
import { FavoriteModule } from './favorite/favorite.module';

@Module({
  imports: [UsersModule,
    MongooseModule.forRoot('mongodb+srv://ngForce:OLXrHGZaaevq0VQX@cluster0.k56k7.mongodb.net/ng_force?retryWrites=true&w=majority'), 
    CompanyModule, CreateCvModule,PostjobModule, MailModule, CalendarModule , MessagesModule,FollowsModule, NotificationModule,FavoriteModule, SubscriptionModule],
  controllers: [AppController],
  providers: [AppService,MessagesGateway],
})
export class AppModule {}
