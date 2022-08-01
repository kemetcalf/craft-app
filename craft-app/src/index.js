import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./custom.scss";
import App from "./App";

const rootElement = document.getElementById("root");

const root = ReactDOMClient.createRoot(rootElement);

root.render(
	<BrowserRouter>
		<App callback={() => console.log("renderered")} />
	</BrowserRouter>
);

// ReactDOM.render(
// 	<React.StrictMode>
// 		<App />
// 	</React.StrictMode>,
// 	document.getElementById("root")
// );
