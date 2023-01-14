import { Module } from '@nestjs/common';
import { DataBaseProviderCluster } from './database.provider';

@Module({
  imports: [DataBaseProviderCluster],
  exports: [DataBaseProviderCluster],
})
export class DatabaseModule {}
