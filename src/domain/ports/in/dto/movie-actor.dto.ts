import { IsNotEmpty } from 'class-validator';

export class CreateMovieActorDto {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsNotEmpty({ message: 'Nome é obrigatório.' })
  nameActor: string;
}
