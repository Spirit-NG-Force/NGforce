import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.schema';
import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { JwtService } from '@nestjs/jwt';
import { MailService } from '../mail/mail.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User') private userModel: Model<User>,
    private readonly jwtService: JwtService,
    private mailService: MailService
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = this.userModel.create(createUserDto);
    return createdUser;
  }
  async signup(createUserDto: CreateUserDto) {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(createUserDto.password, saltOrRounds);
    const emaill = createUserDto.email;
    const findlogin = await  this.userModel.findOne({email : emaill}).exec()
    
      if (findlogin) {
        return JSON.stringify({msg : 'This email exists'});
      }
    

    const createdUser = await this.userModel.create({
      name: createUserDto.name,
      lastname: createUserDto.lastname,
      email: createUserDto.email,
      password: hash,
      status: createUserDto.status,
    });
    this.mailService.sendUserConfirmation(createdUser ,"hello")
    return JSON.stringify({msg : "right"});
  }
  async login(updateUserDto: UpdateUserDto) {
    const user = await this.userModel
      .findOne({ email: updateUserDto.email })
      .exec();
    if (!user) return JSON.stringify({ token: `email don't exist` });

    const { password } = user;
    const isMatch = await bcrypt.compare(updateUserDto.password, password);
    if (isMatch) {
      const payload = { userid : user._id };

      const token = this.jwtService.sign(payload);
      return JSON.stringify({ token });
    } else {
      return JSON.stringify({ token: 'incorrect password' });
    }
  }

  async findAll() {
    return this.userModel.find();
  }
  async decode(id : string){
    const payload=await this.jwtService.verify(id)
  return JSON.stringify(payload)
  }

  async findOne(id: string) {
    return this.userModel.findById({ _id: id });
  }

  async update(id: string, updateUserDto): Promise<User> {
    if(updateUserDto.password){
      const saltOrRounds = 10;
      const hash = await bcrypt.hash(updateUserDto.password, saltOrRounds)
      updateUserDto.password=hash
    }
    const hello = this.userModel.findOneAndUpdate({ _id: id }, updateUserDto, {
      new: true,
      useFindAndModify: false,
    });
    return hello;
  }
  async deleteUser(id: string) {
    return this.userModel.findByIdAndDelete({ _id: id });
  }
}


