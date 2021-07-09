import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Post()
  create(@Body() createMessageDto: CreateMessageDto) {
    return this.messagesService.create(createMessageDto);
  }

  @Get()
  findAll() {
    return this.messagesService.findAll();
  }

  @Get("user/:user_id")
  findAllByUser(@Param('user_id') user_id:string) {
    return this.messagesService.findAllByUser(user_id);
  }

  @Get("company/:company_id")
  findAllByCompany(@Param('company_id') company_id:string) {
    return this.messagesService.findAllByCompany(company_id);
  }

  @Get("conversations/user/:user_id")
  getConversationsByUser(@Param('user_id') user_id:string) {
    return this.messagesService.getConversationsByUser(user_id);
  }

  @Get("conversations/company/:company_id")
  getConversationsByCompany(@Param('company_id') company_id:string) {
    return this.messagesService.getConversationsByCompany(company_id);
  }

}
