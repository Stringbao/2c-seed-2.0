
class Injector{
    constructor(){
        this._iocMap = new Map();
    }
    register(key, callback){
        this._iocMap.set(key, callback);
    }
    use(key, ...args){
        let res = this._iocMap.get(key);
        if(typeof res == "function"){
            return res(...args);
        }
        return res;
    }
}
export default new Injector();
