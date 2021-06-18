import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.schema';
import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User') private userModel: Model<User>,
    private readonly jwtService: JwtService,
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
    

    const createdUser = this.userModel.create({
      name: createUserDto.name,
      lastname: createUserDto.lastname,
      email: createUserDto.email,
      password: hash,
      status: createUserDto.status,
    });
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
      const payload = { email: user._id };

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
  // @Injectable()
  // export class UsersService {
  //   constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) {}

  //   create(createUserDto: CreateUserDto) {
  //     return 'This action adds a new user';
  //   }

  //   findAll() {

  //     return `This action returns all users`;
  //   }

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
}

//   remove(id: number) {
//     return `This action removes a #${id} user`;
//   }
// }
