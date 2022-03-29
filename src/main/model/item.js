
import Services from "@services/index";

class Item{
    constructor(){
        this._data = null;
    }

    init(data, parent){
        this._data = data;
        this._parent = parent;
    }
}

export default Item;