import { Injectable } from '@nestjs/common';
import { Ejercicio3Service } from '../ejercicio3/ejercicio3.service';

@Injectable()
export class Ejercicio4Service {
  constructor(private readonly serviceEjercicio3: Ejercicio3Service) {}
  async escenario1(id_tribe: number) {
    const rows = await this.serviceEjercicio3.escenario3(id_tribe);
    return rows;
  }
}
