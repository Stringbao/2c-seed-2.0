

import Services from "@services/index.js";
import ViewFactory from "@view/factory";
import List from "@model/list";

class Engine{
    constructor(){
        this._terminal  = ViewFactory.getTerminal();
    }

    notify(){
        
    }

    init(rootContainer){
        this._rootContainer = $(rootContainer);
        this.readyToRender();
    }

    initModel(data){
        this._list = new List();
        this._list.setData(data);
    }

    readyToRender(){
        Services.getData(this).then(x=>{
            debugger
            let defaultItem = Services.getDefaultItem(this._list);
            this._listView = new ViewFactory().create($MAP.MODEL_TYPES.LIST.TYPE, this._list);
            this._itemView = new ViewFactory().create($MAP.MODEL_TYPES.ITEM.TYPE, defaultItem);

            this._listView.init();
            this._itemView.init();
            
            this.notify();
        }).catch(err=>{
            
            console.log("get data error");
        })
    }
}

export default Engine;