class BaseView {
    constructor(model, rootContainer){
        this._model = model;
        this._el = $(rootContainer).find("div.empty");;
    }

    init(){
        this.render();
    }

    notify(){

    }

    render(){
       
    }
}

export default BaseView;