import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { Subscription } from './subscription.interface';

@Injectable()
export class SubscriptionService {
  constructor(
    @InjectModel('Subscription') private readonly subscriptionModel : Model<Subscription>
  ) {}
  create(createSubscriptionDto: CreateSubscriptionDto) {
    return this.subscriptionModel.create(createSubscriptionDto);
  }

  findAll() {
    return this.subscriptionModel.find();
  }

  findOne(_id: string) {
    return this.subscriptionModel.findOne({_id});
  }

  findByName(name: string) {
    return this.subscriptionModel.findOne({name})
  }

}
