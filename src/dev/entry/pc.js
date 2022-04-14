import "@css/common.scss";
import "@css/pc.scss";
import Engine from "@src/main/engine.js";

if(!$PRODUCTION) {
    let _engine = new Engine();
    _engine.init($("div.topclass"));
}

window._engine = Engine;

export default Engine;