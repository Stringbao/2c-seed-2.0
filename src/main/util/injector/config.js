
import $rootInjector from "./injector";
import ViewFactory from "@view/factory";

import List from "@model/list";
import ListItem from "@model/item";

const IOCConfig = {
    init(){
        $rootInjector.register("List", (...args)=>{
            debugger
            let list = new List(...args);
            list._data.forEach(x => {
                let item = $rootInjector.use("ListItem", x);
                list.add(item);
            });
            return list;
        })

        $rootInjector.register("ListItem", (...args)=>{
            return new ListItem(...args);
        })

        $rootInjector.register("ListView", (model)=>{
            let listModel = model;
            let listView = new ViewFactory().create($MAP.MODEL_TYPES.LIST.TYPE, listModel);
            listModel._items.forEach(x=>{
                let itemView = $rootInjector.use("ListItemView", x);
                listView.add(itemView);
            })
            return listView;
        })

        $rootInjector.register("ListItemView", (model)=>{
            let listItemView = new ViewFactory().create($MAP.MODEL_TYPES.LIST_ITEM.TYPE, model);
            return listItemView;
        })

        $rootInjector.register("InfoView", (model)=>{
            let listItemView = new ViewFactory().create($MAP.MODEL_TYPES.INFO.TYPE, model);
            return listItemView;
        })

        $rootInjector.register("Constant", []);
    }
}
IOCConfig.init();
export default $rootInjector;
