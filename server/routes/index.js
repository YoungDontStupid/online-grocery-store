// Связующий роутер

const Router = require('express')
const router = new Router()
const foodRouter = require('./foodRouter')
const userRouter = require('./userRouter')
const categoryRouter = require('./categoryRouter')
const typeRouter = require('./typeRouter')

// Обьединение роутеров в 1
router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/category', categoryRouter)
router.use('/food', foodRouter)


module.exports = router