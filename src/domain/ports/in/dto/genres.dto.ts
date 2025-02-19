import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateGenresDto {
  @IsNotEmpty({ message: 'Nome é obrigatório.' })
  nameGenre: string;
}
export class UpdateGenresDto {
  @IsUUID('4', { message: 'ID inválido.' })
  id: string;

  @IsNotEmpty({ message: 'O nome da genres é obrigatório.' })
  nameGenre: string;
}

export class FindGenresByIdDto {
  @IsUUID('4', { message: 'ID inválido.' })
  id: string;
}

export class FindGenresByNameDto {
  @IsNotEmpty({ message: 'O nome da genres é obrigatório para busca.' })
  nameGenre: string;
}
export class DeleteGenresDto {
  @IsUUID('4', { message: 'ID inválido.' })
  id: string;
}
