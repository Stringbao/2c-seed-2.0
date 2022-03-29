//如果 PC mobile  tablet公用一套view，只需在声明的时候指向一个view即可

/*********************  Recommendation *********************************/
import ListPC from "@view/list/pc.js";
import ListMobile from "@view/list/mobile.js";
import ListTablet from "@view/list/tablet.js";

import ItemPC from "@view/item/pc.js";
import ItemMobile from "@view/item/mobile.js";
import ItemTablet from "@view/item/tablet.js";
export default class ViewFactory{
    constructor(){
        
    }

    static getTerminal(){
        return typeof(__TERMINAL__) == 'undefined'?__TERMINAL__:"1";
    }

    create(type, model){
        if(this.__proto__.hasOwnProperty(type) && typeof(this.__proto__[type]) == "function"){
            return this.__proto__[type].call(this, model);
        }
        return null;
    }
    createByType(pcClassName, mobileClassName, tabletClassName, model){
        let obj = new pcClassName(model);
        switch(ViewFactory.getTerminal()){
            case $CONSTANT.TERMINAL.MOBILE:
                obj = new mobileClassName(model);
                break;
            case $CONSTANT.TERMINAL.TABLET:
                obj = new tabletClassName(model);
                break;
        }
        return obj;
    }
}

ViewFactory.prototype[$MAP.MODEL_TYPES.LIST.TYPE] = function(model){
    return this.createByType(ListPC, ListMobile, ListTablet, model);
}
ViewFactory.prototype[$MAP.MODEL_TYPES.ITEM.TYPE] = function(model){
    return this.createByType(ItemPC, ItemMobile, ItemTablet, model);
}
