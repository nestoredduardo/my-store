import { ErrorRequestHandler } from 'express'

export const logError: ErrorRequestHandler = (err, req, res, next) => {
  console.log(err)
  next(err)
}

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.status(500).json({
    message: err.message,
  })
}
