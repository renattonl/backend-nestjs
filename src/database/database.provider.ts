import { DynamicModule } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

export const DataBaseProvider: DynamicModule = TypeOrmModule.forRootAsync({
  inject: [ConfigService],
  async useFactory(config: ConfigService): Promise<TypeOrmModuleOptions> {
    const isDevelopmentEnv = config.get('NODE_ENV') !== 'production';
    const dbConfig: TypeOrmModuleOptions = {
      type: 'postgres',
      ssl: true,
      host: config.get('DB_HOST'),
      port: +config.get('DB_PORT'),
      username: config.get('DB_USERNAME'),
      password: config.get('DB_PASSWORD'),
      database: config.get('DB_NAME'),
      autoLoadEntities: true,
      synchronize: isDevelopmentEnv,
      logging: config.get('DB_LOGGING'),
    };
    return dbConfig;
  },
});

export const DataBaseProviderCluster: DynamicModule =
  TypeOrmModule.forRootAsync({
    inject: [ConfigService],
    async useFactory(config: ConfigService): Promise<TypeOrmModuleOptions> {
      const isDevelopmentEnv = config.get('NODE_ENV') !== 'production';
      const dbUrl = new URL(config.get('DB_URL'));
      const routingId = dbUrl.searchParams.get('options');
      dbUrl.searchParams.delete('options');
      const dbConfig: TypeOrmModuleOptions = {
        type: 'cockroachdb',
        url: dbUrl.toString(),
        ssl: true,
        autoLoadEntities: true,
        synchronize: isDevelopmentEnv,
        logging: config.get('DB_LOGGING'),
        extra: {
          options: routingId,
        },
      };
      return dbConfig;
    },
  });
