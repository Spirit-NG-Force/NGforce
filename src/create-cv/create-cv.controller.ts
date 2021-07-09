import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile} from '@nestjs/common';
import { CreateCvService } from './create-cv.service';
import { CreateCreateCvDto } from './dto/create-create-cv.dto';
import { UpdateCreateCvDto } from './dto/update-create-cv.dto';
import { FileInterceptor } from "@nestjs/platform-express";

@Controller('create-cv')
export class CreateCvController {
  constructor(private readonly createCvService: CreateCvService) {}

  @Post()
  // @UseInterceptors(FileInterceptor('file'))
  create(@Body() createCreateCvDto: CreateCreateCvDto) {
    console.log(createCreateCvDto)
    return this.createCvService.create(createCreateCvDto);
  }

  @Post("/searchcv")
  find( @Body() updateCreateCvDto: UpdateCreateCvDto) {
    return this.createCvService.findTwo(updateCreateCvDto);
  }

  @Get()
  findAll() {
    return this.createCvService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.createCvService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCreateCvDto: UpdateCreateCvDto) {
    return this.createCvService.update(id, updateCreateCvDto);
  }

  @Post("testcloudinary")
  @UseInterceptors(FileInterceptor('file'))
  createimage(@UploadedFile() file : Express.Multer.File) {
    console.log(file)
    return this.createCvService.uploadImageToCloudinary(file)
  }

}
