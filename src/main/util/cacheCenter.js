class CacheCenter{
    constructor(){
        this._rootContainer = null;
        this._configData = null;
        
    }

    getRootContainer(){
        return this._rootContainer;
    }

    setRootContainer(container){
        this._rootContainer = container;
    }

    getConfigData(){
        return this._configData;
    }

    setConfigData(configData){
        this._configData = configData;
    }
}

export default new CacheCenter();