class BaseView {
    constructor(model){
        this._model = model;
        this._listRootEl = null;
        this._el = null;
    }

    init(container){
        this._listRootEl = $(container);
        this.render();
        this.addEventListeners();
    }

    render(){
        this._el = $("<div class='listitem'></div>");
        let html = `
            <div class='listitem'>
                <span tag='detail'>Detail</span>
                <span>${this._model._data.name}__</span>
                <span>${this._model._data.id}__</span>
                <span>${this._model._data.age}__</span>
            </div>
        `;
        this._el.html(html);
        $(this._listRootEl).append(this._el);
    }

    addEventListeners(){
        $(this._el).on("click", "span[tag=detail]", ()=>{
            flash_fe_core_tool.$event_publisher.broadcast($MAP.EVENT_KEY.DETAIL, this._model);
        })
    }
}

export default BaseView;