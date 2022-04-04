
import $rootInjector from "./injector";
import ViewFactory from "@view/factory";
import ModelFactory from "@model/factory";

const IOCConfig = {
    init(){
        //注册List model对象以及派生ListItem model子对象
        $rootInjector.register($MAP.TYPES.MODEL.LIST.TYPE, (...args)=>{
            let list = new ModelFactory().create($MAP.TYPES.MODEL.LIST.TYPE, ...args);
            list._data.forEach(x => {
                let item = $rootInjector.use($MAP.TYPES.MODEL.LIST_ITEM.TYPE, x);
                list.add(item);
            });
            return list;
        })
        //创建ListItem model对象
        $rootInjector.register($MAP.TYPES.MODEL.LIST_ITEM.TYPE, (...args)=>{
            return new ModelFactory().create($MAP.TYPES.MODEL.LIST_ITEM.TYPE, ...args);
        })
        //创建ListView对象以及派生ListItemView子视图
        $rootInjector.register($MAP.TYPES.VIEW.LIST.TYPE, (model)=>{
            let listView = new ViewFactory().create($MAP.TYPES.VIEW.LIST.TYPE, model);
            model._items.forEach(x=>{
                let itemView = $rootInjector.use($MAP.TYPES.VIEW.LIST_ITEM.TYPE, x);
                listView.add(itemView);
            })
            return listView;
        })
        //创建ListView子视图
        $rootInjector.register($MAP.TYPES.VIEW.LIST_ITEM.TYPE, (model)=>{
            return new ViewFactory().create($MAP.TYPES.VIEW.LIST_ITEM.TYPE, model);
        })
        //创建InfoView视图
        $rootInjector.register($MAP.TYPES.VIEW.INFO.TYPE, (model)=>{
            return new ViewFactory().create($MAP.TYPES.VIEW.INFO.TYPE, model);
        })

        $rootInjector.register("Constant", []);
    }
}
IOCConfig.init();
export default $rootInjector;
