import { Module } from '@nestjs/common';
import { FollowsService } from './follows.service';
import { FollowsController } from './follows.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {FollowsSchema}from './follows.schema';
@Module({
  imports: [ MongooseModule.forFeature([{ name: 'follows', schema: FollowsSchema }])],
  controllers: [FollowsController],
  providers: [FollowsService]
})
export class FollowsModule {}
