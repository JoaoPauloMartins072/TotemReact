import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { FaturasProvider } from "./providers/faturas";
import App from "./App.jsx";

ReactDOM.render(
<React.StrictMode>
        <FaturasProvider>
            <App />
        </FaturasProvider>
    </React.StrictMode>,
  //<App />,

  document.getElementById("root")
);
