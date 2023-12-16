const uuid = require('uuid')
const path = require('path');
const ApiError = require('../error/ApiError');
const {Food, FoodInfo} = require('../models/models')



class FoodController {
    async create(req, res, next) {
        try {
            let {name, price, categoryId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const food = await Food.create({name, price, categoryId, typeId, img: fileName});

            if (info) {
                // перегоняем в js обьекты из json 
                info = JSON.parse(info)
                info.forEach(i =>
                    FoodInfo.create({
                        title: i.title,
                        description: i.description,
                        foodId: food.id
                    })
                )
            }

            return res.json(food)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {
        let {categoryId, typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let foods;
        if (!categoryId && !typeId) {
            foods = await Food.findAndCountAll({limit,offset})
        }
        if (categoryId && !typeId) {
            foods = await Food.findAndCountAll({where:{categoryId},limit,offset})
        }
        if (!categoryId && typeId) {
            foods = await Food.findAndCountAll({where:{typeId},limit,offset})
        }
        if (categoryId && typeId) {
            foods = await Food.findAndCountAll({where:{typeId, categoryId},limit,offset})
        }
        return res.json(foods)
    }

    async getOne(req, res) {
        const {id} = req.params
        const food = await Food.findOne(
            {
                where: {id},
                include: [{model: FoodInfo, as: 'info'}]
            },
        )
        return res.json(food)
    }

    async delete(req, res) {
        const {id} = req.body
        const findFoodById = await Food.findByPk(id);
        const deleteFood = await findFoodById.destroy()
        const foods = await Food.findAll()
        return res.json(foods)
    }
}

module.exports = new FoodController()