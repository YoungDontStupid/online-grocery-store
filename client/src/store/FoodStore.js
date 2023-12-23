import { makeAutoObservable } from 'mobx'

// при изменении элементов mobx будет перерендерить компоненты
export default class FoodStore {
    constructor() {
        this._categorys = []
        this._foods = []
        this._selectedCategory = {}
        this._selectedType = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 5
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
        this.setPage(1)
        this._selectedCategory = category
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
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

    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }

}