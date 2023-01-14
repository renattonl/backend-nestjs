import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Metrics } from './entities/metrics.entity';
import { Repository } from './entities/repository.entity';
import { Tribe } from './entities/tribe.entity';
import { Ejercicio3Controller } from './ejercicio3.controller';
import { Ejercicio3Service } from './ejercicio3.service';
import { Ejercicio1Service } from '../ejercicio1/ejercicio1.service';

@Module({
  imports: [TypeOrmModule.forFeature([Tribe, Repository, Metrics])],
  controllers: [Ejercicio3Controller],
  providers: [Ejercicio1Service, Ejercicio3Service],
})
export class Ejercicio3Module {}
