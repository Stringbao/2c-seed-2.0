
import ViewFactory from "@view/factory";

class BaseView {
    constructor(model){
        this._model = model;
        this._el = $(_demoEngine._rootContainer).find("div.list_container");;
    }

    init(){
        this.render();
        this.addEventListeners();
    }

    render(){
        this._model._items.forEach(x => {
            debugger
            let _itemView = new ViewFactory().create($MAP.MODEL_TYPES.ITEM.TYPE, x);
            _itemView.renderInList(this._el);
        });
    }

    addEventListeners(){
        let that = this;
        $(this._el).on("click", "div.next", function(){
            
        })
    }
}

export default BaseView;