class BaseView {
    constructor(model){
        this._model = model;

        this._rootEl = $CACHE_CENTER.getRootContainer().find("div.item_container");
        this._el = {
            name:this._rootEl.find(".name"),
            id:this._rootEl.find(".id"),
            age:this._rootEl.find(".age")
        }
    }

    init(){
        this.render();
        this.addEventListeners();
    }

    render(){
        this._el.name.text(this._model._data.name);
        this._el.id.text(this._model._data.id);
        this._el.age.text(this._model._data.age);
    }

    addEventListeners(){

    }

}

export default BaseView;