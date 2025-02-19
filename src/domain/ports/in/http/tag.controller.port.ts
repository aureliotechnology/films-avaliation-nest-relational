import { Controller, Post, Body } from '@nestjs/common';
import { TagService } from 'src/domain/service/tag-service';
import { CreateTagDto } from '../dto/tag.dto';

@Controller('tags')
export class TagController {
  constructor(private readonly moviectorAService: TagService) {}

  @Post()
  create(@Body() ceateTagDto: CreateTagDto) {
    return this.moviectorAService.create(ceateTagDto);
  }
}
