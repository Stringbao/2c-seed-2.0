import { render } from "node-sass";

class BaseView {
    constructor() {

    }

    getElByPn(container, pn){
        return container.find(`div.merchandising_${pn}_flag`);
    }

    render() {

    }
}

export default BaseView;