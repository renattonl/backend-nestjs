import { Module } from '@nestjs/common';
import { Ejercicio4Controller } from './ejercicio4.controller';
import { Ejercicio4Service } from './ejercicio4.service';
import { Ejercicio3Service } from '../ejercicio3/ejercicio3.service';
import { Ejercicio1Service } from '../ejercicio1/ejercicio1.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tribe } from '../ejercicio3/entities/tribe.entity';
import { Repository } from '../ejercicio3/entities/repository.entity';
import { Metrics } from '../ejercicio3/entities/metrics.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tribe, Repository, Metrics])],
  controllers: [Ejercicio4Controller],
  providers: [Ejercicio1Service, Ejercicio3Service, Ejercicio4Service],
})
export class Ejercicio4Module {}
