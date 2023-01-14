import { Controller, Get, Param } from '@nestjs/common';
import { Ejercicio3Service } from './ejercicio3.service';

@Controller('ejercicio3')
export class Ejercicio3Controller {
  constructor(private readonly service: Ejercicio3Service) {}

  @Get('escenario1/:id_tribe')
  escenario1(@Param('id_tribe') id_tribe: string) {
    return this.service.escenario1(+id_tribe);
  }

  @Get('escenario2/:id_tribe')
  escenario2(@Param('id_tribe') id_tribe: string) {
    return this.service.escenario2(+id_tribe);
  }

  @Get('escenario3/:id_tribe')
  escenario3(@Param('id_tribe') id_tribe: string) {
    return this.service.escenario3(+id_tribe);
  }

  @Get('escenario4/:id_tribe')
  escenario4(@Param('id_tribe') id_tribe: string) {
    return this.service.escenario4(+id_tribe);
  }
}
