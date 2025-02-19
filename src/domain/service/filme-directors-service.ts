import { Injectable } from '@nestjs/common';
import { FilmeDirectorsEntity } from '../entity/film-directors.entity';
import { CreateFilmDirectorsDto } from '../ports/in/dto/film-directors.dto';

@Injectable()
export class FilmeDirectorsService {
  private entities: FilmeDirectorsEntity[] = [];

  create(createFilmDirectorsDto: CreateFilmDirectorsDto): FilmeDirectorsEntity {
    const entity = new FilmeDirectorsEntity(
      createFilmDirectorsDto.filmeDirector,
    );
    this.entities.push(entity);
    return entity;
  }
}
