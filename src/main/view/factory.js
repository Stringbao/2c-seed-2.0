//如果 PC mobile  tablet公用一套view，只需在声明的时候指向一个view即可

/*********************  Recommendation *********************************/
import ListPC from "@view/list/pc.js";
import ListMobile from "@view/list/mobile.js";
import ListTablet from "@view/list/tablet.js";

import ListItemPC from "@view/listitem/pc.js";
import ListItemMobile from "@view/listitem/mobile.js";
import ListItemTablet from "@view/listitem/tablet.js";

import InfoPC from "@view/info/pc.js";
import InfoMobile from "@view/info/mobile.js";
import InfoTablet from "@view/info/tablet.js";
export default class ViewFactory{
    constructor(){
        
    }

    static getTerminal(){
        return typeof(__TERMINAL__) == 'undefined'?"1":__TERMINAL__;
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

ViewFactory.prototype[$MAP.TYPES.VIEW.LIST.TYPE] = function(model){
    return this.createByType(ListPC, ListMobile, ListTablet, model);
}
ViewFactory.prototype[$MAP.TYPES.VIEW.LIST_ITEM.TYPE] = function(model){
    return this.createByType(ListItemPC, ListItemMobile, ListItemTablet, model);
}
ViewFactory.prototype[$MAP.TYPES.VIEW.INFO.TYPE] = function(model){
    return this.createByType(InfoPC, InfoMobile, InfoTablet, model);
}
