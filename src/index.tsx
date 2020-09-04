import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { ErrorBoundary } from "react-error-boundary";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App";
import ErrorDisplay from "./components/ErrorDisplay";
import * as serviceWorker from "./serviceWorker";
import Loading from "./components/Loading";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <ErrorBoundary
        fallbackRender={({ error, componentStack }) => (
          <ErrorDisplay error={error} componentStack={componentStack} />
        )}
      >
        <App />
      </ErrorBoundary>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
