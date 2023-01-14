import { Module } from '@nestjs/common';
import { Ejercicio1Controller } from './ejercicio1.controller';
import { Ejercicio1Service } from './ejercicio1.service';

@Module({
  controllers: [Ejercicio1Controller],
  providers: [Ejercicio1Service],
})
export class Ejercicio1Module {}
