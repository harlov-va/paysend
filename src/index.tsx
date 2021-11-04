import React from "react";
import { StylesProvider } from "@material-ui/core/styles";
import ReactDOM from "react-dom";

import App from "./App";
import {State} from "./context/State/State";

const application = (
    <StylesProvider injectFirst>
        <State>
            <App/>
        </State>
    </StylesProvider>
)

ReactDOM.render(
    application,
  document.getElementById("root")
);
