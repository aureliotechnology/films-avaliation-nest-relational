import { Module } from '@nestjs/common';
import { FilmeDirectorsontroller } from 'src/domain/ports/in/http/film-directors.controller.port';
import { GenresServiceController } from 'src/domain/ports/in/http/genres.controller.port';
import { MovieActorController } from 'src/domain/ports/in/http/movie-actor.controller.port';
import { TagController } from 'src/domain/ports/in/http/tag.controller.port';
import { FilmeDirectorsService } from 'src/domain/service/filme-directors-service';
import { GenresService } from 'src/domain/service/genres-service';
import { MovieActorService } from 'src/domain/service/movie-actor.service';
import { TagService } from 'src/domain/service/tag-service';

@Module({
  imports: [],
  controllers: [
    MovieActorController,
    GenresServiceController,
    TagController,
    FilmeDirectorsontroller,
  ],
  providers: [
    MovieActorService,
    GenresService,
    FilmeDirectorsService,
    TagService,
  ],
})
export class AppModule {}
