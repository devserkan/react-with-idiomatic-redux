import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/Root";
import configureStore from "./configureStore";
import "./index.css";

const store = configureStore();

ReactDOM.render(
    <Root store={store} />,
    document.getElementById( "root" )
);

