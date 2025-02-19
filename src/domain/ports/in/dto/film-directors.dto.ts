import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateFilmDirectorsDto {
  @IsNotEmpty({ message: 'Nome é obrigatório.' })
  filmeDirector: string;
}

export class UpdateFilmDirectorsDto {
  @IsUUID('4', { message: 'ID inválido.' })
  id: string;

  @IsNotEmpty({ message: 'O nome da movie film director é obrigatório.' })
  nameFilmDirectors: string;
}

export class FindFilmDirectorsByIdDto {
  @IsUUID('4', { message: 'ID inválido.' })
  id: string;
}

export class FindFilmDirectorsByNameDto {
  @IsNotEmpty({
    message: 'O nome da movie film director é obrigatório para busca.',
  })
  nameFilmDirectors: string;
}
export class DeleteFilmDirectorsDto {
  @IsUUID('4', { message: 'ID inválido.' })
  id: string;
}
