
let Services = {
    getData(engine){
        return $API.getData().then(x=>{
            debugger
            engine.initModel(x);
        })
    },
    getDefaultItem(listModel){
        return listModel._items[0];
    }
}

export default Services;