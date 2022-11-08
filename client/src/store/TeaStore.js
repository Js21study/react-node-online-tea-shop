import {makeAutoObservable} from "mobx";

export default class TeaStore {
    constructor() {
        this._types = []
        this._sorts = []
        this._teas = []
        this._orders = []
        this._selectedType = {}
        this._selectedSort = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3

     
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setSorts(sorts) {
        this._sorts = sorts
    }
    setTeas(teas) {
        this._teas = teas
    }

    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }
    setSelectedSort(sort) {
        this.setPage(1)
        this._selectedSort = sort
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    setOrders(orders) {
        this._orders = orders
    }






    

  

    get types() {
        return this._types
    }
    get sorts() {
        return this._sorts
    }
    get teas() {
        return this._teas
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedSort() {
        return this._selectedSort
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
    get orders() {
        return this._orders
    }


}
