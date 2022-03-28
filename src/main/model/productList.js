

import Services from "@services/index";
import ProductItem from "@model/productItem";

class ProductList{
    constructor(){
        this._data = [];
        this._items = [];
    }
    
    setData(data){
        this._data = data;
    }

    createItems(idx){
        let items = Services.splitGroup(this._data, 5);
        this._items = [];
        items[idx].forEach(x=>{
            this._items.push(new ProductItem(x));
        })
    }
}

export default ProductList;