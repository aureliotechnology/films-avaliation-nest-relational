import { Controller, Post, Body } from '@nestjs/common';
import { GenresService } from 'src/domain/service/genres-service';
import { CreateGenresDto } from '../dto/genres.dto';
@Controller('genres')
export class GenresServiceController {
  constructor(private readonly genresService: GenresService) {}

  @Post()
  create(@Body() createGenresDto: CreateGenresDto) {
    return this.genresService.create(createGenresDto);
  }
}
