import { IsNotEmpty } from 'class-validator';

export class CreateTagDto {
  @IsNotEmpty({ message: 'Nome é obrigatório.' })
  nameTag: string;
}
