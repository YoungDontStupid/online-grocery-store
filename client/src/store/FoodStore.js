import { makeAutoObservable } from 'mobx'

// при изменении элементов mobx будет перерендерить компоненты
export default class FoodStore {
    constructor() {
        this._categorys = [
            { "id": 1, "name": 'Готовая еда'},
            { "id": 2, "name": 'Вода и напитки' },
            { "id": 3, "name": 'Овощи и фрукты' },
            { "id": 4, "name": 'Мясо и рыба' },
            { "id": 5, "name": 'Сладкое' },
            { "id": 6, "name": 'Морозилка' }
        ]
        this._types = [
            { "id": 1, "name": 'Вода',"categoryId":2},
            { "id": 2, "name": 'Соки и морсы', "categoryId":2},
            { "id": 3, "name": 'Кола и лимонады', "categoryId":2},
            { "id": 4, "name": 'Холодный час и кваc', "categoryId":2},
            { "id": 5, "name": 'Энергетики, пиво и вино', "categoryId":2},

            
        ]
        this._foods = [
            { "id": 1, "name": 'Кола Evervess, с газом', "price": 91, "img": 'https://cm.samokat.ru/processed/l/public/fa51dab157892492_4600494685507.jpg' },
            { "id": 2, "name": 'Круассан York Fresh, с ветчиной и сыром', "price": 185, "img": 'https://cm.samokat.ru/processed/l/public/6490205804210af8_4660042190532-1.jpg' }
        ]
        this._selectedCategory = {}
        this._selectedType = {}
        makeAutoObservable(this)
    }

    setCategorys(categorys) {
        this._categorys = categorys
    }
    setTypes(types) {
        this._types = types
    }
    setFoods(foods) {
        this._foods = foods
    }
    setSelectedCategory(category) {
        this._selectedCategory = category
    }
    setSelectedType(type) {
        this._selectedType = type
    }



    get categorys() {
        return this._categorys
    }
    get types() {
        return this._types
    }
    get foods() {
        return this._foods
    }
    get selectedCategory() {
        return this._selectedCategory
    }
    get selectedType() {
        return this._selectedType
    }
}