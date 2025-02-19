import { Controller, Post, Body } from '@nestjs/common';
import { FilmeDirectorsService } from 'src/domain/service/filme-directors-service';
import { CreateFilmDirectorsDto } from '../dto/film-directors.dto';
@Controller('film-direcctors')
export class FilmeDirectorsontroller {
  constructor(private readonly filmSDirectorservice: FilmeDirectorsService) {}

  @Post()
  create(@Body() createFilmDirectorsDto: CreateFilmDirectorsDto) {
    return this.filmSDirectorservice.create(createFilmDirectorsDto);
  }
}
