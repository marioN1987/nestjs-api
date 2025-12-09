import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StreamingModule } from './streaming_content/streamingContent.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { StreamingContentEntity } from './streaming_content/streamingContent.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'mario890',
      database: 'zenith_db',
      entities: [StreamingContentEntity],
      synchronize: true,
      logging: true,
      logger: 'advanced-console'
    }),
    StreamingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
