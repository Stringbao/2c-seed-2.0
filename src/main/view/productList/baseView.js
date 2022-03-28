

import ViewFactory from "@view/factory";

class BaseView {
    constructor(model, rootContainer){
        this._model = model;
        this._el = $(rootContainer).find("div.productList");

        this._chidrenView = [];
    }

    init(idx){
        this.render();
        //创建子model
        this._model.createItems(idx);
        //render
        this._model._item.forEach(x => {
            let productItemView = new ViewFactory().create("productitem", x, this._el);
            productItemView.render();
            this._chidrenView.push(productItemView);
        });
    }

    notify(){

    }

    render(){
        
    }
}

export default BaseView;