require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')

const PORT = process.env.PORT || 5000

const app = express()
// cors - библиотека для заспросов с браузера
app.use(cors())
// приложение сможет парсить json формат
app.use(express.json())
// явно указываем серверу, что файлы из папки статик будем раздавать как статик
// можем обращаться ко всем файлам из папки static и получать их
app.use(express.static(path.resolve(__dirname,'static')))
// пакет для работы с файлами 
app.use(fileUpload({}))
app.use('/api',router)

// Обработка ошибок, последний middleware 
app.use(errorHandler)

// Функция для подключения к БД (все функции при работе с БД являются ассинхронными)
const start = async () => {
    try {
        await sequelize.authenticate() // установка подключения к БД
        await sequelize.sync() // сверяет состояние БД со схемой данных
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()
