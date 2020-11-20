import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { reducer } from "./reducers/index.js";
import thunk from "redux-thunk";

import App from "./App";

const store = createStore(reducer, applyMiddleware(thunk));

// import {Provider} from "react-redux"
// import {createStore, applyMiddleware} from "redux"
// import thunk from "redux-thunk"
// import logger from "redux-logger"
// import {reducer} from "../src/donnies-components/reducer/index"

// const store = createStore(reducer, applyMiddleware(thunk, logger))

ReactDOM.render(<App />,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
