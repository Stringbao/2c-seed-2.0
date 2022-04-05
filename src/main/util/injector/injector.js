
class Injector{
    constructor(){
        this._injectorMap = new Map();
    }
    register(key, callback){
        this._injectorMap.set(key, callback);
    }
    use(key, ...args){
        let res = this._injectorMap.get(key);
        if(typeof res == "function"){
            return res(...args);
        }
        return res;
    }
}
export default new Injector();
