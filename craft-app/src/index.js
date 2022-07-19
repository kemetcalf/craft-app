import React from "react";
import * as ReactDOMClient from "react-dom/client";
import "./custom.scss";
import App from "./App";

const rootElement = document.getElementById("root");

const root = ReactDOMClient.createRoot(rootElement);

root.render(<App callback={() => console.log("renderered")} />);

// ReactDOM.render(
// 	<React.StrictMode>
// 		<App />
// 	</React.StrictMode>,
// 	document.getElementById("root")
// );
