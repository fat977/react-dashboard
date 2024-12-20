import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import WindowContext from "./context/WindowContext";
import MenuContext from "./context/MenuContext";
import { DarkModeProvider } from "./context/DarkModeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <DarkModeProvider>
      <WindowContext>
        <MenuContext>
          <App />
        </MenuContext>
      </WindowContext>
    </DarkModeProvider>
  </React.StrictMode>
);
//serviceWorkerRegistration.register();
