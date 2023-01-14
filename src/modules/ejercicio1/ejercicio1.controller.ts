import { Controller, Get } from '@nestjs/common';
import { Ejercicio1Service } from './ejercicio1.service';

@Controller('ejercicio1')
export class Ejercicio1Controller {
  constructor(private readonly service: Ejercicio1Service) {}
  @Get()
  findAll() {
    return this.service.findAll();
  }
}
