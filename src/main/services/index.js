
let Services = {
    getData(engine){
        return $API.getData().then(x=>{
            engine.initModel(x);
        })
    },
    getDefaultItem(listModel){
        return flash_fe_core_tool.$util.$obj.clone(listModel._items[0]);
    }
}

export default Services;