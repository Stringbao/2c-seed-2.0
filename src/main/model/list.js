
import Item from "@model/item";

class List{
    constructor(){
        this._data = [];

        this._items = [];
    }
    
    setData(data){
        this._data = data;
        this._data.forEach(item=>{
            this.initChildren(item);
        })
    }

    initChildren(data){
        let _item = new Item();
        _item.init(data, this);
        this._items.push(_item);
    }
}

export default List;