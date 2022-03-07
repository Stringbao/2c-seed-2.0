// 项目组件列表
// library 导出对象的名称，用于httl初始化组件
// componentName 组件在组件管理列表的唯一名称
// terminal 打包生成3端的文件夹名称，以及3端对应的httl
// chunksName 本地运行项目的入口文件路径名称
// entry 本地运行项目的入口文件路径
let componentList = [
    {
        httlName: 'login',
        library: 'login_pc',
        componentName: 'ofp-Login',
        list: [
            {terminal:'pc',chunksName: 'pc',entry: './src/entry/pc.js'},
            {terminal:'tablet',chunksName: 'tablet',entry: './src/entry/tablet.js'},
            {terminal:'mobile',chunksName: 'mobile',entry: './src/entry/mobile.js'}
        ]
    }
]

module.exports = (mode) => {
    // build打包
    if (mode == 'production') return componentList;
    
    // dev本地启动
    let entry = {};
    componentList.forEach(component => {
        component.list.forEach(item => {
            entry[item.chunksName] = item.entry
        })
    })
    return entry
}