import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateTagDto {
  @IsNotEmpty({ message: 'O nome da tag é obrigatório.' })
  nameTag: string;
}
export class UpdateTagDto {
  @IsUUID('4', { message: 'ID inválido.' })
  id: string;

  @IsNotEmpty({ message: 'O nome da tag é obrigatório.' })
  nameTag: string;
}

export class FindTagByIdDto {
  @IsUUID('4', { message: 'ID inválido.' })
  id: string;
}

export class FindTagByNameDto {
  @IsNotEmpty({ message: 'O nome da tag é obrigatório para busca.' })
  nameTag: string;
}
export class DeleteTagDto {
  @IsUUID('4', { message: 'ID inválido.' })
  id: string;
}
