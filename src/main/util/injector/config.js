
import $rootInjector from "./injector";
import ViewFactory from "@view/factory";

import List from "@model/list";
import ListItem from "@model/item";

const IOCConfig = {
    init(){
        $rootInjector.register($MAP.TYPES.MODEL.LIST.TYPE, (...args)=>{
            let list = new List(...args);
            list._data.forEach(x => {
                let item = $rootInjector.use($MAP.TYPES.MODEL.LIST_ITEM.TYPE, x);
                list.add(item);
            });
            return list;
        })

        $rootInjector.register($MAP.TYPES.MODEL.LIST_ITEM.TYPE, (...args)=>{
            return new ListItem(...args);
        })

        $rootInjector.register($MAP.TYPES.VIEW.LIST.TYPE, (model)=>{
            let listView = new ViewFactory().create($MAP.TYPES.VIEW.LIST.TYPE, model);
            model._items.forEach(x=>{
                let itemView = $rootInjector.use($MAP.TYPES.VIEW.LIST_ITEM.TYPE, x);
                listView.add(itemView);
            })
            return listView;
        })

        $rootInjector.register($MAP.TYPES.VIEW.LIST_ITEM.TYPE, (model)=>{
            return new ViewFactory().create($MAP.TYPES.VIEW.LIST_ITEM.TYPE, model);
        })

        $rootInjector.register($MAP.TYPES.VIEW.INFO.TYPE, (model)=>{
            return new ViewFactory().create($MAP.TYPES.VIEW.INFO.TYPE, model);
        })

        $rootInjector.register("Constant", []);
    }
}
IOCConfig.init();
export default $rootInjector;
