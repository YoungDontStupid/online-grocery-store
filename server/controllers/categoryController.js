const {Category} = require('../models/models')
const ApiError = require('../error/ApiError');

class CategoryController {
    async create(req, res) {
        const {name} = req.body
        const category = await Category.create({name})
        return res.json(category)
    }

    async getAll(req, res) {
        const categorys = await Category.findAll()
        return res.json(categorys)
    }
    async delete(req, res) {
        const {id} = req.body
        const findCategoryById = await Category.findByPk(id);
        const deleteCategory = await findCategoryById.destroy()
        const categorys = await Category.findAll()
        return res.json(categorys)
    }
}

module.exports = new CategoryController()