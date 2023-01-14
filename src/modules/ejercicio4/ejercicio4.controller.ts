import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { Ejercicio4Service } from './ejercicio4.service';

@Controller('ejercicio4')
export class Ejercicio4Controller {
  constructor(private readonly service: Ejercicio4Service) {}

  @Get('escenario1/:id_tribe')
  async escenario1(
    @Param('id_tribe') id_tribe: string,
    @Res() response: Response,
  ) {
    const csv = await this.service.escenario1(+id_tribe);
    response.header('Content-Type', 'text/csv');
    response.attachment('reporte.csv');
    return response.send(csv);
  }
}
