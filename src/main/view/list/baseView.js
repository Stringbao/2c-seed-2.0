
class BaseView {
    constructor(model){
        this._model = model;
        this._el = $(_demoEngine._rootContainer).find("div.list_container");
        this._itemsViews = [];
    }

    add(itemView){
        itemView._parent = this;
        this._itemsViews.push(itemView);
    }

    init(){
        this.render();
        this.addEventListeners();
    }

    render(){
        this._itemsViews.forEach(x => {
            x.init(this._el);
        });
    }

    addEventListeners(){
        
    }
}

export default BaseView;