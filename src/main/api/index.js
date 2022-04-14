

import Data from "../../dev/entry/data.js";

export default {
    async getData(){
        let data = await Data.data;
        return data;
    }
}