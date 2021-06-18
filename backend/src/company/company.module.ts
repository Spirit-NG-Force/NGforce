import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import {CompanySchema} from "./company.schema"

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'company', schema: CompanySchema }]),
    JwtModule.register({ secret: "VERY BIG SECRET DON'T SHOW" }),
  ],
  controllers: [CompanyController],
  providers: [CompanyService]
})
export class CompanyModule {}
