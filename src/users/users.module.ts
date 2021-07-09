import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user.schema';
import { JwtModule } from '@nestjs/jwt';
import { MailService } from 'src/mail/mail.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    JwtModule.register({ secret: "VERY BIG SECRET DON'T SHOW" }),
    MailService
  ],
  controllers: [UsersController],
  providers: [UsersService , MailService],
  exports : [UsersService,MongooseModule]
})

export class UsersModule {}
