

import Services from "@services/index.js";
import ViewFactory from "@view/factory";

class Engine{
    constructor(_terminal){
        this._terminal  = _terminal?_terminal:ViewFactory.getTerminal();
    }

    notify(){
        flash_fe_core_tool.$event_publisher.on($MAP.EVENT_KEY.DETAIL, (model)=>{
            this._info.update(model._data);
            this._infoView.render();
        });
    }

    init(rootContainer){
        $CACHE_CENTER.setRootContainer(rootContainer);
        this.readyToRender();
        this.notify();
    }

    initModel(data){
        this._list = $Injector.use($MAP.TYPES.MODEL.LIST.TYPE, data);
        this._info = Services.getDefaultItem(this._list);
    }

    readyToRender(){
        Services.getData(this).then(()=>{
            this._listView = $Injector.use($MAP.TYPES.VIEW.LIST.TYPE, this._list);
            this._infoView = $Injector.use($MAP.TYPES.VIEW.INFO.TYPE, this._info);

            this._listView.init();
            this._infoView.init();
        }).catch(err=>{
            console.log(err, "get data error");
        })
    }
}

export default Engine;