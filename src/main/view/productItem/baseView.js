


class BaseView {
    constructor(model, rootContainer){
        this._model = model;
        this._el = $(rootContainer).find("div.productItem");;
    }

    init(){

    }

    notify(){

    }

    render(){
       
    }
}

export default BaseView;