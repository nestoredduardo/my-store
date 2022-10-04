// Libraries
import joi from 'joi'
import boom from '@hapi/boom'

// Types
import { RequestHandler } from 'express'
import { Schema } from 'joi'

export const validatorHandler = (
  schema: Schema,
  property: string,
): RequestHandler => {
  return (req, res, next) => {
    const { error } = schema.validate(req[property])
    const valid = error == null

    if (valid) {
      next()
    } else {
      const { details } = error
      const message = details.map((i) => i.message).join(',')

      next(boom.badRequest(message))
    }
  }
}
