

import View from "@view/baseview";

let Services = {
    createView(){
        return ;
    },
    getFeaturePrice(merchandisings, pns){
        http.get(pns).then(x=>{
            for (let index = 0; index < merchandisings.length; index++) {
                const item = merchandisings[index];
                if(x[item._product.productNumber]){
                    this.createView().updateFP(item._el, data);
                }
            }
        })
    }
}

export default Services;