import { IsNotEmpty, IsUUID } from 'class-validator';
export class CreateMovieActorDto {
  @IsNotEmpty({ message: 'Nome é obrigatório.' })
  nameActor: string;
}

export class UpdateMovieActorDto {
  @IsUUID('4', { message: 'ID inválido.' })
  id: string;

  @IsNotEmpty({ message: 'O nome da movie actor é obrigatório.' })
  nameMovieActor: string;
}

export class FindMovieActorByIdDto {
  @IsUUID('4', { message: 'ID inválido.' })
  id: string;
}

export class FindMovieActorByNameDto {
  @IsNotEmpty({ message: 'O nome da movie actor é obrigatório para busca.' })
  nameMovieActor: string;
}
export class DeleteMovieActorDto {
  @IsUUID('4', { message: 'ID inválido.' })
  id: string;
}
