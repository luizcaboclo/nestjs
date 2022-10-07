import { Controller, Get } from '@nestjs/common';
import { get } from 'http';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/ola')
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/bsms')
  getbsms(): string {
    return this.appService.getbsms();
  }
  @Get('/objetivos')
  getobjetivos(): string {
    return this.appService.getobjetivos();
  }
}