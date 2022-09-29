// Libraries
import express from 'express'
import dotenv from 'dotenv'

// Routes
import routerApi from '@/routes/index'

// Middlewares
import {
  logError,
  errorHandler,
  boomErrorHandler,
} from '@/middlewares/error.handler'

dotenv.config()
const app = express()

app.use(express.json())

const PORT = process.env.PORT || 3001

app.get('/', (req, res) => {
  res.send('Hello asshole!')
})

routerApi(app)

app.use(logError)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
