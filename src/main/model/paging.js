

class Paging{
    constructor(){
        
    }
    
    setData(data){
        this._idx = data.index;
        this._total = data.total;
    }

    updateIdx(idx){
        this._idx = idx;
    }

    getPagingInfo(tag){
        let res = {disable:false, idx:-1};
        //下一页
        if(tag == "1"){
            //idx == 1
            if(this._idx == 1){
                res.disable = true;
            }
            res = {disable:false, idx: this._idx - 1};
        }else{
            if(this._idx >= this._total){
                res.disable = true;
            }
            res = {disable:false, idx: this._idx + 1};
        }
        return res;
    }
}

export default Paging;