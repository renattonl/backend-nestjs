import { Controller, Get, Param } from '@nestjs/common';
import { Ejercicio4Service } from './ejercicio4.service';

@Controller('ejercicio4')
export class Ejercicio4Controller {
  constructor(private readonly service: Ejercicio4Service) {}

  @Get('escenario1/:id_tribe')
  escenario1(@Param('id_tribe') id_tribe: string) {
    return this.service.escenario1(+id_tribe);
  }
}
