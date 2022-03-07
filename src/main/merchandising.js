

import Services from "@services/index.js";

/**
 * 1:拿到参数，请求数据
 * 2:缓存，存到tool对象池里面的某个对象
 * 3:根据config来render:吐出一段html
 */

class Merchandising{
    constructor(product, config={}, opt={}){
        this._terminal = __TERMINAL__;
        this._rootContainer = null;
        this._product = product;
        this._config = config;
        this._opts = {
            request:false
        };

        this._el = null;
    }

    setEl(el){
        this._el = el;
    }

    //return html
    create(){
        return "";
    }

    //初始化
    init(rootContainer){
        this.setEl(rootContainer.find(`div.merchandising_${this._product.productNumber}_flag`));
        //get featrue price
        this.addEventListenerList();
    }

    addEventListenerList(){

    }
}

export default Merchandising;