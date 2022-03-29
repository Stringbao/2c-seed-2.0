class BaseView {
    constructor(model){
        this._model = model;
        this._el = $(_demoEngine._rootContainer).find("div.item_container");
    }

    init(){
        this.render();
        this.addEventListeners();
    }

    renderInList(container){
        let html = `
            <div class='listitem'>
                <span>${this._model.name}__</span>
                <span>${this._model.id}__</span>
                <span>${this._model.age}__</span>
            </div>
        `;
        $(container).append($(html));
        this._el = $(html);
    }

    addEventListeners(){
        let that = this;
        $(this._el).on("click", "div.next", function(){
            
        })
    }
}

export default BaseView;