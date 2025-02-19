import { v4 as uuidv4 } from 'uuid';
import * as Joi from 'joi';

interface GenresInput {
  nameGenres: string;
}

export class GenresEntity {
  public readonly id: string;
  public readonly nameGenres: string;

  private static schema = Joi.object<GenresInput>({
    nameGenres: Joi.string().trim().min(1).required().messages({
      'string.base': `'nameGenres' must be a string.`,
      'string.empty': `'nameGenres' cannot be empty.`,
      'any.required': `'nameGenres' is required.`,
    }),
  });

  constructor(nameGenres: string) {
    const result: Joi.ValidationResult<GenresInput> =
      GenresEntity.schema.validate({ nameGenres }, { abortEarly: false });

    if (result.error) {
      throw new Error(
        `GenresEntity validation failed: ${result.error.message}`,
      );
    }

    const validated: GenresInput = result.value;
    this.id = uuidv4();
    this.nameGenres = validated.nameGenres;
  }
}
