import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FollowsService } from './follows.service';
import { CreateFollowDto } from './dto/create-follow.dto';
import { UpdateFollowDto } from './dto/update-follow.dto';

@Controller('follows')
export class FollowsController {
  constructor(private readonly followsService: FollowsService) {}

  @Post()
  create(@Body() createFollowDto: CreateFollowDto) {
    return this.followsService.create(createFollowDto);
  }

  @Get()
  findAll() {
    return this.followsService.findAll();
  }
  @Get(':iduser')
  search(@Param('iduser') iduser: string) {
    return this.followsService.search(iduser);
  }

  @Get(':iduser/:idcompany')
  findOne(@Param('iduser') iduser: string,@Param('idcompany') idcompany: string) {
    return this.followsService.findOne(iduser,idcompany);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFollowDto: UpdateFollowDto) {
    return this.followsService.update(+id, updateFollowDto);
  }

  @Delete(':iduser/:idcompany')
  remove(@Param('iduser') iduser: string,@Param('idcompany') idcompany: string) {
    return this.followsService.remove(iduser,idcompany);
  }
}
