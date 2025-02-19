/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// src/infra/validators/basic-input.schema.ts

import * as Joi from 'joi';

export const createUserSchema = Joi.object({
  id: Joi.string()
    .guid({ version: ['uuidv1', 'uuidv2', 'uuidv3', 'uuidv4'] })
    .required()
    .messages({
      'string.base': `'id' must be a string.`,
      'string.guid': `'id' must be a valid UUID (versions 1, 2, 3, or 4).`,
      'any.required': `'id' is required.`,
    }),
  nome: Joi.string().trim().min(1).required().messages({
    'string.base': `'nome' must be a text.`,
    'string.empty': `'nome' cannot be empty.`,
    'any.required': `'nome' is required.`,
  }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.base': `'email' must be a text.`,
      'string.email': `'email' must be a valid email.`,
      'string.empty': `'email' cannot be empty.`,
      'any.required': `'email' is required.`,
    }),
});

/**
 * Type guard to determine if an error is a Joi.ValidationError.
 *
 * @param error - The value to check.
 * @returns True if error is a Joi.ValidationError.
 */
function isJoiValidationError(error: unknown): error is Joi.ValidationError {
  return (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    error instanceof Error && 'isJoi' in error && Boolean((error as any).isJoi)
  );
}

/**
 * Validates user input based on the defined schema.
 *
 * @param input - The input data to validate.
 * @returns The validated data.
 * @throws Joi.ValidationError if validation fails, or a generic Error for unmapped errors.
 */
export async function validateUserInput(input: unknown): Promise<unknown> {
  try {
    const value = await createUserSchema.validateAsync(input);
    return value;
  } catch (error: unknown) {
    if (error instanceof Error) {
      if (isJoiValidationError(error)) {
        // O Joi.ValidationError já é uma instância de Error
        throw error;
      }
      throw new Error(
        `Unmapped error occurred during validation: ${error.message}`,
      );
    }
    throw new Error('Unmapped error occurred during validation.');
  }
}
