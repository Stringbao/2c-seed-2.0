const express = require("express");
const app = express();
const processCommand = require("child_process");

/*为app添加中间件处理跨域请求*/
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next(); 
});
// get方式监听/login请求
app.get("/publish", (req, res) => {
    //在这里做点什么
    publish(res)
    console.log('publishing...')
})
 
 
// 监听3300端口
app.listen(3309, () => {
    console.log('publish server in: 3309');
})


function publish(res){
    processCommand.exec("npm run publish",
        function(error, stdout) {
            if (error !== null) {
               console.log("exec error: " + error);
               res.send({
                  msg:error
               })
            }
            res.send({
               msg:"publish success"
            })
            console.log('publish success')
        }
    );
}