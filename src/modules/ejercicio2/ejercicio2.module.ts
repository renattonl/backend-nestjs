import { Module } from '@nestjs/common';
import { Ejercicio2Controller } from './ejercicio2.controller';
import { Ejercicio2Service } from './ejercicio2.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Organization } from './entities/organization.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Organization])],
  controllers: [Ejercicio2Controller],
  providers: [Ejercicio2Service],
})
export class Ejercicio2Module {}
