

import Services from "@services/index.js";

import Merchandising from "./merchandising.js";

class Engine{
    constructor(){
        this._terminal  = __TERMINAL__;
        this._merchandisings = [];
    }

    create(product, config={}, opt={}){
        let item = new Merchandising(product, config, opt);
        this._merchandisings.push(item);
        return item.create();
    }

    init(rootContainer){
        let pns = [];
        for (let index = 0; index < this._merchandisings.length; index++) {
            pns.push(this._merchandisings[index].productNumber);
            this._merchandisings[index].init();
        }
        Services.getFeaturePrice(this._merchandisings, pns);
    }
}

export default Engine;