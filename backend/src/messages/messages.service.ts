import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Messages } from './messages.interface';
import { Company } from 'src/company/company.interface';
import { CompanyService } from 'src/company/company.service';

@Injectable()
export class MessagesService {
  constructor(
    private readonly companyService: CompanyService,
    @InjectModel('messages') private messagesModel: Model<Messages>,
    @InjectModel('company') private companyModel: Model<Company>
  ) {}

  create(createMessageDto: CreateMessageDto) {
    const createdmessages = this.messagesModel.create(createMessageDto);
    return createdmessages;
  }

  async findAll() {
    return this.messagesModel.find().sort({ createdAt: -1 }).limit(20);
  }

  async findAllByUser(user_id: string) {
    return this.messagesModel.find({ user_id }).sort({ createdAt: -1 });
  }

  async findAllByCompany(company_id: string) {
    return this.messagesModel.find({ company_id }).sort({ createdAt: -1 });
  }

  async getConversationsByUser(user_id: string) {
    const agg = await  this.messagesModel.aggregate([{
      $match: {
        user_id: Types.ObjectId(user_id)
      }
    }, {
      $project: {
        company_id: 1,
        text: 1,
        sender: 1,
        createdAt: 1
      }
    }, {
      $sort: { createdAt: -1 }
    }, {
      $group: {
        _id: "$company_id",
        messages :{
          $push: {
            text: "$text",
            sender: "$sender",
            createdAt: "$createdAt"
          },
        },
        last: {
          $last: "$createdAt"
        } 
      }
    }, {
      $sort: {
        last: -1
      }
    }])

    const populated = await this.companyModel.populate(agg, {path: '_id'})
    return populated
  }

  async getConversationsByCompany(company_id: string) {
    return this.messagesModel.aggregate([{
      $match: {
        company_id: Types.ObjectId(company_id)
      }
    }, {
      $project: {
        user_id: 1,
        text: 1,
        sender: 1,
        createdAt: 1
      }
    }, {
      $sort: { createdAt: -1 }
    }, {
      $group: {
        _id: "$user_id",
        messages :{
          $push: {
            text: "$text",
            sender: "$sender",
            createdAt: "$createdAt"
          },
        },
        last: {
          $last: "$createdAt"
        } 
      }
    }, {
      $sort: {
        last: -1
      }
    }])
    
  }

  //   findOne(id: number) {
  //     return `This action returns a #${id} message`;
  //   }

  //   update(id: number, updateMessageDto: UpdateMessageDto) {
  //     return `This action updates a #${id} message`;
  //   }

  //   remove(id: number) {
  //     return `This action removes a #${id} message`;
  //   }
}
