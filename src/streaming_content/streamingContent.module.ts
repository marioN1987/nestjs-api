import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StreamingContentController } from './streamingContent.controller';
import { StreamingContentService } from './streamingContent.service';
import { StreamingContentEntity } from './streamingContent.entity';
@Module({
  imports:[TypeOrmModule.forFeature([StreamingContentEntity])],
  controllers: [StreamingContentController],
  providers: [StreamingContentService],
  exports: [TypeOrmModule]
})
export class StreamingModule {}