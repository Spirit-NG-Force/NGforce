import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostjobService } from './postjob.service';
import { CreatePostjobDto } from './dto/create-postjob.dto';
import { UpdatePostjobDto } from './dto/update-postjob.dto';

@Controller('postjob')
export class PostjobController {
  constructor(private readonly postjobService: PostjobService) {}

  @Post()
  create(@Body() createPostjobDto: CreatePostjobDto) {
    return this.postjobService.create(createPostjobDto);
  }
  @Post("/searchps")
  find( @Body() updatePostjobDto: any) {
    return this.postjobService.findOne1(updatePostjobDto);
  }

  @Get()
  findAll() {
    return this.postjobService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postjobService.findOne(id);
  }
  @Get('/:id/find')
  findTwo(@Param('id') id: string) {
    return this.postjobService.findOne2(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostjobDto: UpdatePostjobDto) {
    return this.postjobService.update(id, updatePostjobDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postjobService.remove(id);
  }
}
