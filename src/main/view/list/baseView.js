
import ViewFactory from "@view/factory";

class BaseView {
    constructor(model){
        this._model = model;
        this._el = $(_demoEngine._rootContainer).find("div.list_container");
    }

    init(){
        this.render();
        this.addEventListeners();
    }

    render(){
        this._model._items.forEach(x => {
            let _itemView = new ViewFactory().create($MAP.MODEL_TYPES.LIST_ITEM.TYPE, x);
            _itemView.init(this._el);
        });
    }

    addEventListeners(){
        
    }
}

export default BaseView;