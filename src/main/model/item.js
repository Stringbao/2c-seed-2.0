
class Item{
    constructor(data){
        this._data = data;
    }

    update(data){
        this._data = flash_fe_core_tool.$util.$obj.clone(data);
    }
}

export default Item;