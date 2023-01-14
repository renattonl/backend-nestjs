import { Controller, Get, Param, Query } from '@nestjs/common';
import { Ejercicio3Service } from './ejercicio3.service';
import { QueryFilter } from './interfaces';

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
  escenario3(
    @Param('id_tribe') id_tribe: string,
    @Query() queryParams: QueryFilter,
  ) {
    return this.service.escenario3(+id_tribe, queryParams);
  }

  @Get('escenario4/:id_tribe')
  escenario4(@Param('id_tribe') id_tribe: string) {
    return this.service.escenario4(+id_tribe);
  }
}
