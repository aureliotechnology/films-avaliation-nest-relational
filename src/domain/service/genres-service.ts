import { Injectable } from '@nestjs/common';
import { GenresEntity } from '../entity/genres.entity';
import { CreateGenresDto } from '../ports/in/dto/genres.dto';

@Injectable()
export class GenresService {
  private entities: GenresEntity[] = [];

  create(createGenresDto: CreateGenresDto): GenresEntity {
    const entity = new GenresEntity(createGenresDto.nameGenre);
    this.entities.push(entity);
    return entity;
  }
}
