import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { StreamingContentService } from './streamingContent.service';
import { StreamingContentDto } from './streamingContent.dto';
import { StreamingContentEntity } from './streamingContent.entity';

@Controller('api/streaming')
export class StreamingContentController {
  constructor(private readonly streamingContentService: StreamingContentService) {}

  @Get()
  async findAll(): Promise<StreamingContentEntity[]> {
    return this.streamingContentService.findAll();
  }

  @Get(':id')
  async findOne(@Param() params: any): Promise<StreamingContentEntity | null> {
    return this.streamingContentService.findOne(params.id);
  }

  @Post()
  create(@Body() createStreamingContentDto: StreamingContentDto) {
    return 'This action adds a new streaming';
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateStreamingDto: StreamingContentDto) {
    return `This action updates a #${id} streaming`;
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.streamingContentService.remove(id);
  }
}