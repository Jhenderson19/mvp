import React, { useState } from "react";
import { render } from "react-dom";
import RequestManager from "./controller/RequestManager"

import App from "./components/App.js";


render(<App RequestManager={RequestManager}/>, document.getElementById("root"));