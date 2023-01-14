import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { Ejercicio1Module } from './modules/ejercicio1/ejercicio1.module';
import { Ejercicio2Module } from './modules/ejercicio2/ejercicio2.module';
import { Ejercicio3Module } from './modules/ejercicio3/ejercicio3.module';
import { Ejercicio4Module } from './modules/ejercicio4/ejercicio4.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    DatabaseModule,
    Ejercicio1Module,
    Ejercicio2Module,
    Ejercicio3Module,
    Ejercicio4Module,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
