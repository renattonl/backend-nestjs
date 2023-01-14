import { Injectable } from '@nestjs/common';
import { Ejercicio3Service } from '../ejercicio3/ejercicio3.service';
import { Parser } from 'json2csv';

@Injectable()
export class Ejercicio4Service {
  constructor(private readonly serviceEjercicio3: Ejercicio3Service) {}
  async escenario1(id_tribe: number) {
    const { repositories } = await this.serviceEjercicio3.escenario3(id_tribe);
    const parser = new Parser();
    const csv = parser.parse(repositories);
    return csv;
  }
}
