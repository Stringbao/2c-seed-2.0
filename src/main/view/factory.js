//如果 PC mobile  tablet公用一套view，只需在声明的时候指向一个view即可

/*********************  Recommendation *********************************/
import PagingPC from "@view/paging/pc.js";
import PagingMobile from "@view/paging/mobile.js";
import PagingTablet from "@view/paging/tablet.js";
import ProductListPC from "@view/paging/pc.js";
import ProductListMobile from "@view/paging/mobile.js";
import ProductListTablet from "@view/paging/tablet.js";

import ProductItemPC from "@view/productItem/pc.js";
import ProductItemMobile from "@view/productItem/mobile.js";
import ProductItemTablet from "@view/productItem/tablet.js";

import SummaryPC from "@view/paging/pc.js";
import SummaryMobile from "@view/paging/mobile.js";
import SummaryTablet from "@view/paging/tablet.js";

import EmptyPC from "@view/empty/tablet.js";
import EmptyMobile from "@view/empty/tablet.js";
import EmptyTablet from "@view/empty/tablet.js";

export default class ViewFactory{
    constructor(){
        
    }

    static getTerminal(){
        return typeof(__TERMINAL__) == 'undefined'?__TERMINAL__:"1";
    }

    create(type, model, container){
        if(this.__proto__.hasOwnProperty(type) && typeof(this.__proto__[type]) == "function"){
            return this.__proto__[type].call(this, model, container);
        }
        return null;
    }
    createByType(pcClassName, mobileClassName, tabletClassName, model, container){
        let obj = new pcClassName(model, container);
        switch(ViewFactory.getTerminal()){
            case $CONSTANT.TERMINAL.MOBILE:
                obj = new mobileClassName(model, container);
                break;
            case $CONSTANT.TERMINAL.TABLET:
                obj = new tabletClassName(model, container);
                break;
        }
        return obj;
    }
}

ViewFactory.prototype[$MAP.MODEL_TYPES.PAGING.TYPE] = function(model,container){
    return this.createByType(PagingPC, PagingMobile, PagingTablet, model, container);
}

ViewFactory.prototype[$MAP.MODEL_TYPES.PRODUCT_LIST.TYPE] = function(model, container){
    return this.createByType(ProductListPC, ProductListMobile, ProductListTablet, model, container);
}

ViewFactory.prototype[$MAP.MODEL_TYPES.SUMMARY.TYPE] = function(model, container){
    return this.createByType(SummaryPC, SummaryMobile, SummaryTablet, model, container);
}

ViewFactory.prototype[$MAP.MODEL_TYPES.EMPTY.TYPE] = function(model, container){
    return this.createByType(EmptyPC, EmptyMobile, EmptyTablet, model, container);
}
ViewFactory.prototype[$MAP.MODEL_TYPES.PRODUCT_ITEM.TYPE] = function(model, container){
    return this.createByType(ProductItemPC, ProductItemMobile, ProductItemTablet, model, container);
}

