
import ViewFactory from "@view/factory";

class BaseView {
    constructor(model){
        this._model = model;
        this._el = $(_demoEngine._rootContainer).find("div.list_container");
        this._itemsView = [];
    }

    add(itemView){
        this._itemsView.push(itemView);
    }

    init(){
        this.render();
        this.addEventListeners();
    }

    render(){
        this._itemsView.forEach(x => {
            x.init(this._el);
        });
    }

    addEventListeners(){
        
    }
}

export default BaseView;