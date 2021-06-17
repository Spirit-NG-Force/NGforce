import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateCvService } from './create-cv.service';
import { CreateCreateCvDto } from './dto/create-create-cv.dto';
import { UpdateCreateCvDto } from './dto/update-create-cv.dto';

@Controller('create-cv')
export class CreateCvController {
  constructor(private readonly createCvService: CreateCvService) {}

  @Post()
  create(@Body() createCreateCvDto: CreateCreateCvDto) {
    return this.createCvService.create(createCreateCvDto);
  }

  @Get()
  findAll() {
    return this.createCvService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.createCvService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCreateCvDto: UpdateCreateCvDto) {
    return this.createCvService.update(+id, updateCreateCvDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.createCvService.remove(+id);
  }
}
