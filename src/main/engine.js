

import Services from "@services/index.js";
import Paging from "@model/paging";
import ProductList from "@model/productList";
import Summary from "@model/summary";
import ViewFactory from "./view/factory";

class Engine{
    constructor(){
        this._terminal  = ViewFactory.getTerminal();
        this._paging = new Paging();
        this._productList = new ProductList();
        this._summary = new Summary();
    }

    notify(){
        flash_fe_core_tool.$event_publisher.on("pagingNext", (idx)=>{
            this._pagingView.updateCurrentIndex(idx);
            this._productListView.updateList(idx);
        })
        flash_fe_core_tool.$event_publisher.on("pagingPrev", (idx)=>{
            this._pagingView.updateCurrentIndex(idx);
            this._productListView.updateList(idx);
        })
        flash_fe_core_tool.$event_publisher.on("fromCTA", ()=>{
            $("div.header .minicart").show();
            this.initData();
        })
    }

    init(rootContainer){
        this._emptyContainer = $(rootContainer).find("div.empty");
        this._contentContainer = $(rootContainer).find("div.content");
        this.initData();
    }

    initData(idx=1){
        Services.geMiniCartData(this, idx).then(x=>{
            this._pagingView = new ViewFactory().create("type", this._paging, this._contentContainer);
            this._productListView = new ViewFactory().create("type", this._productList, this._contentContainer);
            this._summaryView = new ViewFactory().create("type", this._summary, this._contentContainer);

            _pagingView.init();
            _productListView.init(this._paging);
            _summaryView.init();

            Services.showContentByData(true, this._contentContainer, this._emptyContainer);
            this.notify();
        }).catch(err=>{
            this._emptyView = new ViewFactory().create("type", null, this._emptyContainer);
            this._emptyView.render();
            Services.showContentByData(false, this._contentContainer, this._emptyContainer);
            console.log("get data error");
        })
    }
}

export default Engine;