import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch
} from '@nestjs/common';
import { PostjobService } from './postjob.service';
import { CreatePostjobDto } from './dto/create-postjob.dto';
import { UpdatePostjobDto } from './dto/update-postjob.dto';
import { CompanyService } from 'src/company/company.service';

@Controller('postjob')
export class PostjobController {
  constructor(
    private readonly postjobService: PostjobService,
    private readonly companyService: CompanyService,
  ) {}

  @Post()
  async create(@Body() createPostjobDto: CreatePostjobDto) {
    const boo = await this.companyService.handlePost(createPostjobDto.company);
    console.log(boo);
    return this.postjobService.create(createPostjobDto);
  }
  @Post('/searchps')
  find(@Body() updatePostjobDto: any) {
    return this.postjobService. findfrompostjob(updatePostjobDto);
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
    return this.postjobService. findfromcompany(id);
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
