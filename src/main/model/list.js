
import Item from "@model/item";

class List{
    constructor(data){
        this._data = data;
        this._items = [];
    }

    add(item){
        item._parent = this;
        this._items.push(item);
    }
}

export default List;