import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Company } from './company.schema';
import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel('company') private companyModel: Model<Company>,
    private readonly jwtService: JwtService,
    
  ) {}

  create(createCompanyDto: CreateCompanyDto) : Promise<Company> {
    const createdCompany = this.companyModel.create(createCompanyDto) 
    return createdCompany ;
  }

  async signup(createCompanyDto: CreateCompanyDto) {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(createCompanyDto.password, saltOrRounds);
    const emaill = createCompanyDto.email;
    const findlogin = await  this.companyModel.findOne({email : emaill}).exec()
    
      if (findlogin) {
        return JSON.stringify({msg : 'This email exists'});
      }
    

    const createdCompany = await this.companyModel.create({
      name:createCompanyDto.name,
      adress:createCompanyDto.adress,
      phonenumber:createCompanyDto.phonenumber,
      website:createCompanyDto.website,
      email:createCompanyDto.email,
      password:hash,
      status:createCompanyDto.status,
      
    });

    return JSON.stringify({msg : "right"});
  }
  async login(updateCompanyDto: UpdateCompanyDto) {
    const company = await this.companyModel
      .findOne({ email: updateCompanyDto.email })
      .exec();
    if (!company) return JSON.stringify({ token: `email don't exist` });

    const { password } = company;
    const isMatch = await bcrypt.compare(updateCompanyDto.password, password);
    if (isMatch) {
      const payload = { email1: company._id };

      const token = this.jwtService.sign(payload);
      return JSON.stringify({ token });
    } else {
      return JSON.stringify({ token: 'incorrect password' });
    }
  }

  async findAll() {
    return this.companyModel.find();
  }

  async findOne(id: string) {
    return this.companyModel.findById({ _id: id }).exec();
  }

  async update(id: string, updateCompanyDto): Promise<Company> {
    const hello = this.companyModel.findOneAndUpdate({ _id: id }, updateCompanyDto, {
      new: true,
      useFindAndModify: false,
    });
    return hello;
  }
  remove(id: number) {
    return `This action removes a #${id} company`;
  }
}
