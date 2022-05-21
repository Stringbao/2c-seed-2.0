let componentList = [
    {
        library: 'Moto_Account_Entry',
        componentName: 'moto-account-Login',
        list: [
            {terminal:'pc',chunksName: 'pc',entry: './src/dev/entry/pc.js'},
            {terminal:'tablet',chunksName: 'tablet',entry: './src/dev/entry/tablet.js'},
            {terminal:'mobile',chunksName: 'mobile',entry: './src/dev/entry/mobile.js'}
        ]
    }
]

module.exports = (mode) => {
    if (mode == 'production') return componentList;
    let entry = {};
    componentList.forEach(component => {
        component.list.forEach(item => {
            entry[item.chunksName] = item.entry
        })
    })
    return entry
}