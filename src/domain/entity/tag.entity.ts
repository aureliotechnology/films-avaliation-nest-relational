import { v4 as uuidv4 } from 'uuid';
import * as Joi from 'joi';

interface TagInput {
  nameTag: string;
}

export class TagEntity {
  public readonly id: string;
  public readonly nameTag: string;

  private static schema = Joi.object<TagInput>({
    nameTag: Joi.string().trim().min(1).required().messages({
      'string.base': `'nameTag' must be a string.`,
      'string.empty': `'nameTag' cannot be empty.`,
      'any.required': `'nameTag' is required.`,
    }),
  });

  constructor(nameTag: string) {
    const result: Joi.ValidationResult<TagInput> = TagEntity.schema.validate(
      { nameTag },
      { abortEarly: false },
    );

    if (result.error) {
      throw new Error(`TagEntity validation failed: ${result.error.message}`);
    }

    const validated: TagInput = result.value;
    this.id = uuidv4();
    this.nameTag = validated.nameTag;
  }
}
