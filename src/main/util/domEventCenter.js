
class DomEventCenter{
    constructor(){
    }

    register(rootDom, eventName, condition, fn){
        $(rootDom).on(eventName, condition, fn);
    }
}

export default new DomEventCenter();