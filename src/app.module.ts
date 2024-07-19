import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoutesModule } from './routes/routes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'admin',
      password: 'admin',
      database: 'db_permission',
      autoLoadEntities: true,
      synchronize: true,
    }),
    RoutesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
