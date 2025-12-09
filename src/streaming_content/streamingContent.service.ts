import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StreamingContentEntity } from './streamingContent.entity';

@Injectable()
export class StreamingContentService {
  constructor(
    @InjectRepository(StreamingContentEntity)
    private streamingContentRepository: Repository<StreamingContentEntity>,
  ) {}

  findAll(): Promise<StreamingContentEntity[]> {
    return this.streamingContentRepository.find();
  }

  findOne(id: number): Promise<StreamingContentEntity | null> {
    return this.streamingContentRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.streamingContentRepository.delete(id);
  }
}