import { v4 as uuidv4 } from 'uuid';
import * as Joi from 'joi';

interface GenresInput {
  nameGenere: string;
}

export class GenresEntity {
  public readonly id: string;
  public readonly nameGenere: string;

  private static schema = Joi.object<GenresInput>({
    nameGenere: Joi.string().trim().min(1).required().messages({
      'string.base': `'nameGenere' must be a string.`,
      'string.empty': `'nameGenere' cannot be empty.`,
      'any.required': `'nameGenere' is required.`,
    }),
  });

  constructor(nameGenere: string) {
    const result: Joi.ValidationResult<GenresInput> =
      GenresEntity.schema.validate({ nameGenere }, { abortEarly: false });

    if (result.error) {
      throw new Error(
        `GenresEntity validation failed: ${result.error.message}`,
      );
    }

    const validated: GenresInput = result.value;
    this.id = uuidv4();
    this.nameGenere = validated.nameGenere;
  }
}
