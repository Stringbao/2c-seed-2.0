import "@css/common.scss";
import "@css/pc.scss";
import Engine from "@src/main/engine.js";

let _engine = new Engine();
window._demoEngine = _engine;

if(!$PRODUCTION) {
  _engine.init($("div.topclass"));
}

export default _engine