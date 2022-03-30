
import Services from "@services/index";

class Item{
    constructor(){
        this._data = null;
    }

    init(data, parent){
        this._data = data;
        this._parent = parent;
    }

    update(data){
        this._data = flash_fe_core_tool.$util.$obj.clone(data);
    }
}

export default Item;