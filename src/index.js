import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"

// normalize styles between browsers
import "normalize.css"

import store from "./store"
import "./index.scss"
import { App } from "./containers"
import registerServiceWorker from "./registerServiceWorker"

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
)
registerServiceWorker()
