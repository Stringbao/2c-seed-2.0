class CacheCenter{
    constructor(){
        this._productData = {};
        this._views = {};
    }

    getProductByPn(pn){
        return this._productData[pn];
    }

    setProduct(pn, item){
        this._productData[pn] = item;
    }

    getViewByType(type) {
        return this._views[type];
    }

    setViewByType(type, view) {
        this._views[type] = view;
    }
}

export default new CacheCenter();