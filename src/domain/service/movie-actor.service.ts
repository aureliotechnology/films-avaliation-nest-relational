import { Injectable } from '@nestjs/common';
import { MovieActorEntity } from '../entity/movie-actor.entity';
import { CreateMovieActorDto } from '../ports/in/dto/movie-actor.dto';

@Injectable()
export class MovieActorService {
  private entities: MovieActorEntity[] = [];

  create(createMovieActorDto: CreateMovieActorDto): MovieActorEntity {
    const entity = new MovieActorEntity(createMovieActorDto.nameActor);
    this.entities.push(entity);
    return entity;
  }
}
