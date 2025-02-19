import { Injectable } from '@nestjs/common';
import { TagEntity } from '../entity/tag.entity';
import { CreateTagDto } from '../ports/in/dto/tag.dto';

@Injectable()
export class TagService {
  private entities: TagEntity[] = [];

  create(createTagDto: CreateTagDto): TagEntity {
    const entity = new TagEntity(createTagDto.nameTag);
    this.entities.push(entity);
    return entity;
  }
}
