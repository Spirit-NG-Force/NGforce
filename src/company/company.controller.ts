import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { SubscriptionService } from 'src/subscription/subscription.service';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { PaymentDto } from './dto/payment.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService, private readonly subscriptionService: SubscriptionService) {}

  @Post('payment')
  async payment(@Body() paymentDto: PaymentDto) {
    const subscription = await this.subscriptionService.findByName(paymentDto.subscription_name)
    const creation_date = new Date();
    const expiration_date = new Date(
      creation_date.setMonth(creation_date.getMonth() + 1),
    );
    const company = await this.companyService.setSubscriptionId(
      paymentDto.company_id,
      subscription,
      expiration_date,
    );
    return company;
  }

  @Post()
  create(@Body(ValidationPipe) createCompanyDto: CreateCompanyDto) {
    return this.companyService.create(createCompanyDto);
  }
  @Post('/signup')
  signup(@Body() createCompanyDto: CreateCompanyDto) {
    return this.companyService.signup(createCompanyDto);
  }
  @Post('/login')
  login(@Body() createCompanyDto: CreateCompanyDto) {
    return this.companyService.login(createCompanyDto);
  }

  @Get()
  findAll() {
    return this.companyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companyService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() createCompanyDto: UpdateCompanyDto) {
    return this.companyService.update(id, createCompanyDto);
  }
  @Get("/decodecomp/:id")
  decode (@Param('id') id: string) {
    return this.companyService.decode(id);
  }
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.companyService.deleteCompany(id);
  // }

}
