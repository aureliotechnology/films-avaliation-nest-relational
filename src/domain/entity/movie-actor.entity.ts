import { v4 as uuidv4 } from 'uuid';
import * as Joi from 'joi';

interface MovieActorInput {
  nameActor: string;
}

export class MovieActorEntity {
  public readonly id: string;
  public readonly nameActor: string;

  // Schema de validação definido como propriedade estática com tipagem
  private static schema = Joi.object<MovieActorInput>({
    nameActor: Joi.string().trim().min(1).required().messages({
      'string.base': `'nameActor' must be a string.`,
      'string.empty': `'nameActor' cannot be empty.`,
      'any.required': `'nameActor' is required.`,
    }),
  });

  constructor(nameActor: string) {
    // Executa a validação e define o resultado com tipagem
    const result: Joi.ValidationResult<MovieActorInput> =
      MovieActorEntity.schema.validate({ nameActor }, { abortEarly: false });

    if (result.error) {
      throw new Error(
        `MovieActorEntity validation failed: ${result.error.message}`,
      );
    }

    // Aqui, result.value é tipado como MovieActorInput
    const validated: MovieActorInput = result.value;
    this.id = uuidv4();
    this.nameActor = validated.nameActor;
  }
}
