class BaseView {
    constructor(model, rootContainer){
        this._model = model;
        this._el = $(rootContainer).find("div.paging");;
    }

    init(){
        this.render();
        this.addEventListeners();
        this.notify();
    }

    notify(){

    }

    render(){
        if(this._model._idx == 1){

        }
    }

    updateCurrentIndex(idx){
        
    }

    addEventListeners(){
        let that = this;
        $(this._el).on("click", "div.next", function(){
            //获取下一页的index
            let prevInfo = that._model.getPagingInfo(2);
            //更新当前model index
            if(prevInfo.disable){
                return;
            }
            that.updateIdx(prevInfo.idx);
            flash_fe_core_tool.$event_publisher.broadcast("pagingNext", that);
        })
    }
}

export default BaseView;