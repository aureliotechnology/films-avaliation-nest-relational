import { v4 as uuidv4 } from 'uuid';
import * as Joi from 'joi';

interface FilmeDirectorsInput {
  filmeDirector: string;
}

export class FilmeDirectorsEntity {
  public readonly id: string;
  public readonly filmeDirector: string;

  // Schema de validação definido como propriedade estática com tipagem
  private static schema = Joi.object<FilmeDirectorsInput>({
    filmeDirector: Joi.string().trim().min(1).required().messages({
      'string.base': `'filmeDirector' must be a string.`,
      'string.empty': `'filmeDirector' cannot be empty.`,
      'any.required': `'filmeDirector' is required.`,
    }),
  });

  constructor(filmeDirector: string) {
    // Executa a validação e define o resultado com tipagem
    const result: Joi.ValidationResult<FilmeDirectorsInput> =
      FilmeDirectorsEntity.schema.validate(
        { filmeDirector },
        { abortEarly: false },
      );

    if (result.error) {
      throw new Error(
        `FilmeDirectorsEntity validation failed: ${result.error.message}`,
      );
    }

    // Aqui, result.value é tipado como FilmeDirectorsInput
    const validated: FilmeDirectorsInput = result.value;
    this.id = uuidv4();
    this.filmeDirector = validated.filmeDirector;
  }
}
