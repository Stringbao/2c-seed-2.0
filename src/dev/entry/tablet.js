import "@css/common.scss";
import "@css/tablet.scss";
import mockData from "./data.js";
import Engine from "@src/main/engine.js";
let _engine = new Engine();

if(!$PRODUCTION) {
  _engine.init($(".homePage_tablet"), 3, mockData.result);
}

export default _engine