

let Services = {
    createView(){
        return ;
    },
    geMiniCartData(engine, idx){
        return new Promise((resolve, reject)=>{
            engine._paging.setData({});
            engine._paging.updateIdx(idx);
            engine._productList.setData({});
            engine._summary.setData({});
            resolve();
        })
    },
    showContentByData(flag,contentContainer, emptyContainer){
        if(flag){
            $(contentContainer).show();
            $(emptyContainer).hide();
        }else{
            $(contentContainer).hide();
            $(emptyContainer).show();
        }
    },
    splitGroup(data, count){
        return flash_fe_core_tool.$util.$array.chunk(data, count);
    }
}

export default Services;