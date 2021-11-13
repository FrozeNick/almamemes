import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import './lib/style/main.scss';

const rootElement = document.getElementById("root");
render(
  <React.StrictMode>
    {/* No basename for this router. This app renders at the root / URL. */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);