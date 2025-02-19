import { Controller, Post, Body } from '@nestjs/common';
import { MovieActorService } from 'src/domain/service/movie-actor.service';
import { CreateMovieActorDto } from '../dto/movie-actor.dto';

@Controller('movie-actor')
export class MovieActorController {
  constructor(private readonly moviectorAService: MovieActorService) {}

  @Post()
  create(@Body() ceateMovieActorDto: CreateMovieActorDto) {
    return this.moviectorAService.create(ceateMovieActorDto);
  }
}
