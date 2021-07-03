import { Injectable, UnauthorizedException } from '@nestjs/common';
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

  create(createCompanyDto: CreateCompanyDto): Promise<Company> {
    const createdCompany = this.companyModel.create(createCompanyDto);
    return createdCompany;
  }

  async signup(createCompanyDto: CreateCompanyDto) {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(createCompanyDto.password, saltOrRounds);
    const emaill = createCompanyDto.email;
    const findlogin = await this.companyModel.findOne({ email: emaill }).exec();

    if (findlogin) {
      return JSON.stringify({ msg: 'This email exists' });
    }

    const createdCompany = await this.companyModel.create({
      name: createCompanyDto.name,
      adress: createCompanyDto.adress,
      phonenumber: createCompanyDto.phonenumber,
      website: createCompanyDto.website,
      email: createCompanyDto.email,
      password: hash,
      status: createCompanyDto.status,
    });

    return JSON.stringify({ msg: 'right' });
  }
  async login(updateCompanyDto: UpdateCompanyDto) {
    const company = await this.companyModel
      .findOne({ email: updateCompanyDto.email })
      .exec();
    if (!company) return JSON.stringify({ token: `email don't exist` });

    const { password } = company;
    const isMatch = await bcrypt.compare(updateCompanyDto.password, password);
    if (isMatch) {
      const payload = { companyid : company._id };

      const token = this.jwtService.sign(payload);
      return JSON.stringify({ token });
    } else {
      return JSON.stringify({ token: 'incorrect password' });
    }
  }

  async decode(id : string){
    const payload=await this.jwtService.verify(id)
  return JSON.stringify(payload)
  }

  async findAll() {
    return this.companyModel.find().populate('subscription');
  }

  async findOne(id: string) {
    return this.companyModel.findOne({ _id: id }).populate('subscription');
  }

  async update(id: string, updateCompanyDto): Promise<Company> {
    return this.companyModel.findOneAndUpdate({ _id: id }, updateCompanyDto, {
      new: true,
      useFindAndModify: false,
    });
  }
  remove(id: number) {
    return `This action removes a #${id} company`;
  }

  setSubscriptionId(_id, subscription, expiration_date) {
    return this.companyModel.findByIdAndUpdate(
      { _id },
      {
        $set: {
          subscription,
          is_active: true,
          expiration_date,
          monthly_count: 0,
        },
      },
      {
        new: true,
        useFindAndModify: false,
      },
    );
  }

  /**
   * TODO: Check this
   */

  async desactivateAccount(_id) {
    this.companyModel.findByIdAndUpdate(
      { _id },
      {
        $set: { is_active: false },
      },
    );
  }

  async increaseMonthlyCount(_id) {
    return this.companyModel.findByIdAndUpdate(
      { _id },
      {
        $inc: { monthly_count: 1 },
      },
      {
        new: true,
        useFindAndModify: false,
      },
    );
  }

  async handlePost(_id) {
    const company = await this.companyModel
      .findOne({ _id })
      .populate('subscription');
    console.log(company);
    if (!company.is_active) {
      console.log('company not active');
      throw new UnauthorizedException(
        'You need to subscribe in order to post a job offer',
      );
    }

    const current_date = new Date();
    console.log(
      'company.expiration_date < current_date',
      company.expiration_date,
      current_date,
    );
    if (company.expiration_date < current_date) {
      console.log('company expiration date');
      this.desactivateAccount(_id);
      throw new UnauthorizedException(
        'You subscription has expired, please renew your account',
      );
    }
    console.log(
      'heeeere ',
      company.monthly_count,
      company.subscription.monthly_limit,
    );
    if (company.monthly_count >= company.subscription.monthly_limit) {
      console.log('wfet flousek');
      throw new UnauthorizedException(
        'You have reached the monthly limit, please renew you account',
      );
    }
    console.log('increasing count');
    await this.increaseMonthlyCount(_id);
    return true;
  }
}
