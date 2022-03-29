

import Data from "../../dev/entry/data.js";

export default {
    getData(){
        return new Promise((resolve, reject)=>{
            resolve(Data.data);
        })
    }
}