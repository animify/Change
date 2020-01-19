import React from "react";
import ReactDOM from "react-dom";
import "framecss/src/index.scss";
import * as serviceWorker from "./serviceWorker";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("app"));

serviceWorker.register();
