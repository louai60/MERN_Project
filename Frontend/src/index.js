import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./app/store";
import ErrorBoundary from "./components/ErrorBoundary";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
  </Provider>
);
