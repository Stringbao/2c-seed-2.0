class CacheCenter{
    constructor(){
        this._rootContainer = null;
    }

    getRootContainer(){
        return this._rootContainer;
    }

    setRootContainer(container){
        this._rootContainer = container;
    }
}

export default new CacheCenter();