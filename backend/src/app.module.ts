import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CompanyModule } from './company/company.module';
import { PostjobModule } from './postjob/postjob.module';
import { CreateCvModule } from './create-cv/create-cv.module';



@Module({
  imports: [UsersModule,MongooseModule.forRoot('mongodb://localhost:27017/users'), CompanyModule, CreateCvModule, PostjobModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
