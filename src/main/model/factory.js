//如果 PC mobile  tablet公用一套view，只需在声明的时候指向一个view即可

/*********************  Recommendation *********************************/
import List from "@model/list";
import ListItem from "@model/item";

export default class ModelFactory{
    constructor(){
        
    }

    create(type, data){
        if(this.__proto__.hasOwnProperty(type) && typeof(this.__proto__[type]) == "function"){
            return this.__proto__[type].call(this, data);
        }
        return null;
    }
}

ModelFactory.prototype[$MAP.TYPES.MODEL.LIST.TYPE] = function(data){
    return new List(data);
}
ModelFactory.prototype[$MAP.TYPES.MODEL.LIST_ITEM.TYPE] = function(data){
    return new ListItem(data);
}
