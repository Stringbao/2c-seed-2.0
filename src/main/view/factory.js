//如果 PC mobile  tablet公用一套view，只需在声明的时候指向一个view即可

/*********************  Recommendation *********************************/
import RecommendationPC from "@view/recommendation/pc.js";
import RecommendationMobile from "@view/recommendation/mobile.js";
import RecommendationTablet from "@view/recommendation/tablet.js";

export default class ViewFactory{
    constructor(){
        
    }
    create(type, terminal){
        if(this.__proto__.hasOwnProperty(type) && typeof(this.__proto__[type]) == "function"){
            return this.__proto__[type].call(this, terminal);
        }
        return null;
    }
    createByType(terminal, pcClassName, mobileClassName, tabletClassName){
        let obj = new pcClassName();
        switch(terminal){
            case $CONSTANT.TERMINAL.MOBILE:
                obj = new mobileClassName();
                break;
            case $CONSTANT.TERMINAL.TABLET:
                obj = new tabletClassName();
                break;
        }
        return obj;
    }
}

ViewFactory.prototype[$MAP.MODEL_TYPES.MERCHANDISING.TYPE] = function(terminal){
    return this.createByType(terminal, RecommendationPC, RecommendationMobile, RecommendationTablet);
}