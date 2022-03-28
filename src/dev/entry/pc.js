import "@css/common.scss";
import "@css/pc.scss";
import mockData from "./data.js";
import Engine from "@src/main/engine.js";
let _engine = new Engine();
window._minicart = _engine;

if(!$PRODUCTION) {
  _engine.init($(".homePage_pc"), 1, mockData.result);
}

export default _engine