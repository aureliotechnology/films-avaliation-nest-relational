import { IsNotEmpty } from 'class-validator';

export class CreateMovieActorDto {
  @IsNotEmpty({ message: 'Nome é obrigatório.' })
  filmeDirector: string;
}
