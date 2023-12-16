// Описание моделей схемы БД

const sequelize = require('../db')
const {DataTypes} = require('sequelize')

// primaryKey - первичный ключ, 
//autoIncr - при создании каждого обьекта id будет 1,2,3...,
//allowNull - должно быть заполнено

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const BasketFood = sequelize.define('basket_food', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Food = sequelize.define('food', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
})

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Category = sequelize.define('category', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const FoodInfo = sequelize.define('food_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})

// связующая таблица между type и category
const TypeCategory = sequelize.define('type_category', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})


// Типы связей моделей между ними

User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(BasketFood)
BasketFood.belongsTo(Basket)

Type.hasMany(Food)
Food.belongsTo(Type)

Category.hasMany(Food)
Food.belongsTo(Category)

Food.hasMany(BasketFood) // может быть hasOne?
BasketFood.belongsTo(Food)

Food.hasMany(FoodInfo, {as: 'info'});
FoodInfo.belongsTo(Food)

Type.belongsToMany(Category, {through: TypeCategory })
Category.belongsToMany(Type, {through: TypeCategory })

//экспортирование моделей 
module.exports = {
    User,
    Basket,
    BasketFood,
    Food,
    Type,
    Category,
    TypeCategory,
    FoodInfo
}