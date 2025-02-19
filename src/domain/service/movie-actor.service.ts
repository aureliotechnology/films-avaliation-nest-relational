import { Injectable } from '@nestjs/common';
import { MovieActorEntity } from '../entity/movie-actor.entity';
import { CreateMovieActorDto } from '../ports/in/dto/movie-actor.dto';

@Injectable()
export class MovieActorService {
  private movieActors: MovieActorEntity[] = [];

  create(createMovieActorDto: CreateMovieActorDto): MovieActorEntity {
    const moveActor = new MovieActorEntity(createMovieActorDto.nameActor);
    this.movieActors.push(moveActor);
    return moveActor;
  }
}
